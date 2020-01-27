import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { success, failure } from './actions';

export function* request({ payload }) {
  try {
    const { page = 1, perPage = 10, profile, user } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $organization: OrganizationFieldsInput
          $user: UserFieldsInput
          $page: Int
          $perPage: Int
        ) {
          documents:getAllDocuments(
            organization: $organization
            user: $user
            page: $page
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
        organization: {
          uuid: profile.organization.uuid,
        },
        user: {
          uuid: user.uuid,
        },
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

    yield put(success({ data, meta }));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

export default all([takeLatest('@document/REQUEST', request)]);
