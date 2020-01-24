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
            responsable {
              firstname
              lastname
            }
            organization {
              initials
            }
            publication {
              author {
                uuid
                firstname
                lastname
                email
              }
              publishedAt
            }
            cancellation {
              author {
                uuid
                firstname
                lastname
                email
              }
              canceledAt
            }
            updatedAt
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

    // @TODO
    // vvv handle error in array processing.. vvv
    const data = documents.map(({ updatedAt, ...rest }) => {
      const datetime = utcToZonedTime(new Date(Number(updatedAt)), timezone);
      const date = format(datetime, 'dd/MM/yyyy', { locale: pt });
      const time = format(datetime, 'HH:mm', { locale: pt });

      const { cancellation } = rest;

      const hasCancellation = !!cancellation;
      if (hasCancellation) {
        const canceledAt = new Date(Number(cancellation.canceledAt));
        cancellation.canceledAt = format(canceledAt, 'dd/MM/yyyy', {
          locale: pt,
        });
      }

      return {
        ...{
          ...rest,
          cancellation,
        },
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
          forwarding {
            author {
              uuid
              firstname
              lastname
              email
            }
            forwardedAt
          }
          publication {
            author {
              uuid
              firstname
              lastname
              email
            }
            publishedAt
          }
          cancellation {
            author {
              uuid
              firstname
              lastname
              email
            }
            canceledAt
          }
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
