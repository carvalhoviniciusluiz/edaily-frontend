import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { documentSuccess, documentFailure } from './actions';

export function* documentResquest({ payload }) {
  try {
    const { page = 1, perPage = 10 } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $page: Int,
          $perPage: Int
        ) {
          documents:documentsForAnalysis(
            page: $page,
            perPage: $perPage
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
              updatedAt
            }
          }
        }
      `,
      variables: {
        perPage,
        page,
      },
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

    yield put(documentSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `files/${id}`);
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export function* forward({ payload }) {
  try {
    const { documentUUID, profile } = payload;

    yield call(api.post, '/', {
      query: `
        mutation (
          $organization: OrganizationFieldsInput!,
          $document: DocumentFieldsInput!
        ) {
          sendDocument (
            organization: $organization,
            document: $document
          )
        }
      `,
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        document: {
          uuid: documentUUID,
        },
      },
    });
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(documentFailure());
  }
}

export default all([
  takeLatest('@document/DOCUMENT_REQUEST', documentResquest),
  takeLatest('@document/DOCUMENT_DESTROY', destroy),
  takeLatest('@document/DOCUMENT_FORWARD', forward),
]);
