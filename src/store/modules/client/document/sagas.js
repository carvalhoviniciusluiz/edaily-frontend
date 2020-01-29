import { toast } from 'react-toastify';

import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import {
  success,
  failure,
  followerFetchSuccess,
  followerSuccess,
  followerFailure,
  reviewerSuccess,
  reviewerFailure,
} from './actions';

const DocumentHelper = {};

DocumentHelper.formatDatetime = ({ data, attribute }) => {
  const hasData = !!data;
  if (hasData) {
    const date = new Date(Number(data[attribute]));
    data[attribute] = format(date, 'dd/MM/yyyy', {
      locale: pt,
    });
    data.time = format(date, 'HH:mm', { locale: pt });
  }
};

DocumentHelper.parseCollection = documents => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const data = documents.map(({ updatedAt, ...rest }) => {
    const datetime = utcToZonedTime(new Date(Number(updatedAt)), timezone);
    const date = format(datetime, 'dd/MM/yyyy', { locale: pt });
    const time = format(datetime, 'HH:mm', { locale: pt });

    const { cancellation, forwarding } = rest;

    DocumentHelper.formatDatetime({
      data: cancellation,
      attribute: 'canceledAt',
    });

    DocumentHelper.formatDatetime({
      data: forwarding,
      attribute: 'forwardedAt',
    });

    return {
      ...rest,
      date,
      time,
      updatedAt: datetime,
    };
  });

  return data;
};

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

    const data = DocumentHelper.parseCollection(documents);

    yield put(success({ data, meta }));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(failure());
  }
}

// DOCUMENT FOLLOWER
//

export function* followerResquest({ payload }) {
  try {
    const { page = 1, perPage = 10, profile } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $organization: OrganizationFieldsInput!,
          $user: UserFieldsInput!,
          $page: Int,
          $perPage: Int
        ) {
          documents:getAllDocuments(
            organization: $organization,
            user: $user,
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
            }
          }
        }
      `,
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        user: {
          uuid: profile.uuid,
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

    const data = DocumentHelper.parseCollection(documents);

    yield put(followerSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(followerSuccess());
  }
}

export function* followerFetch({ payload }) {
  try {
    const { documentUUID, profile } = payload;

    const response = yield call(api.post, '/', {
      query: `
        query (
          $organization: OrganizationFieldsInput!,
          $document: DocumentFieldsInput!
        ) {
          document:getDocument(
            organization: $organization,
            document: $document
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
      variables: {
        organization: {
          uuid: profile.organization.uuid,
        },
        document: {
          uuid: documentUUID,
        },
      },
    });

    const { data } = response.data;

    yield put(followerFetchSuccess(data.document));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(followerFailure());
  }
}

// DOCUMENT REVIEWER
//

export function* reviewerResquest({ payload }) {
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

    const data = DocumentHelper.parseCollection(documents);

    yield put(reviewerSuccess(data, meta));
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(reviewerFailure());
  }
}

export function* reviewerDestroy({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `files/${id}`);
  } catch (error) {
    toast.error('Falha na recuperação dos dados, verifique sua conexão.');

    yield put(reviewerFailure());
  }
}

export function* reviewerForward({ payload }) {
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

    yield put(reviewerFailure());
  }
}

export default all([
  takeLatest('@document/REQUEST', request),
  takeLatest('@document/FOLLOWER/REQUEST', followerResquest),
  takeLatest('@document/FOLLOWER/FETCH', followerFetch),
  takeLatest('@document/REVIEWER/REQUEST', reviewerResquest),
  takeLatest('@document/REVIEWER/DESTROY', reviewerDestroy),
  takeLatest('@document/REVIEWER/FORWARD', reviewerForward),
]);
