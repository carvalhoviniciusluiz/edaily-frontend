import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  documentFollowFetchSuccess,
  documentFollowSuccess,
  documentFollowFailure,
} from './actions';

export function* documentFollowResquest({ payload }) {
  try {
    const { page = 1, perPage = 10, profile } = payload;

    const response = yield call(api.post, '/', {
      query: `
      {
        documents:getAllDocuments(
          organization:{
            uuid:"${profile.organization.uuid}",
          },
          user:{
            uuid:"${profile.uuid}",
          },
          page:${page},
          perPage:${perPage}
        ) {
          total
          perPage
          page
          lastPage
          data {
            uuid
            protocol
            file {
              uuid
              name
              url
            }
            author {
              firstname
              lastname
            }
            responsable{
              firstname
              lastname
            }
            organization{
              initials
            }
            updatedAt
            canceledAt
          }
        }
      }
      `,
    });

    const {
      data: {
        documents: { data: documents, ...meta },
      },
    } = response.data;

    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const data = documents.map(({ updatedAt, ...rest }) => {
      const datetime = utcToZonedTime(new Date(Number(updatedAt)), timezone);
      const date = format(datetime, 'dd/MM/yyyy', { locale: pt });
      const time = format(datetime, 'HH:mm', { locale: pt });

      return {
        ...rest,
        date,
        time,
        updatedAt: datetime,
      };
    });

    yield put(documentFollowSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFollowFailure());
  }
}

export function* documentFollowFetch({ payload }) {
  try {
    const { documentUUID, profile } = payload;

    const response = yield call(api.post, '/', {
      query: `
      {
        document:getDocument(
          organization:{
            uuid:"${profile.organization.uuid}",
          },
          document:{
            uuid: "${documentUUID}",
          }
        ) {
          uuid
          protocol
          file {
            uuid
            file
            name
            type
            subtype
            avatar
            url
          }
          pages
          author {
            uuid
            firstname
            lastname
            email
            cpf
          }
          reviser {
            uuid
            firstname
            lastname
            email
          }
          responsable {
            uuid
            firstname
            lastname
            email
          }
          organization {
            uuid
            name
            initials
          }
          canceledAt
          forwardedAt
          publishedAt
          updatedAt
          createdAt
        }
      }
      `,
    });

    const { data } = response.data;

    yield put(documentFollowFetchSuccess(data.document));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFollowFailure());
  }
}

export default all([
  takeLatest('@document/DOCUMENT_FOLLOW_REQUEST', documentFollowResquest),
  takeLatest('@document/DOCUMENT_FOLLOW_FETCH', documentFollowFetch),
]);
