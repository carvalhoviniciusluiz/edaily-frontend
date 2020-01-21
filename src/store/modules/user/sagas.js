import { toast } from 'react-toastify';

import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

function* updateAvatar(params) {
  try {
    const isNew = JSON.parse(params.newAvatar.toLowerCase());

    if (isNew) {
      yield call(api.post, '/', {
        query: `
          mutation (
            $avatar: AvatarInput!
          ) {
            updateAvatar (
              avatar: $avatar
            )
          }
        `,
        variables: {
          avatar: {
            uuid: params.avatar_uuid,
          },
        },
      });
    }
  } catch (error) {
    toast.error('Error ao atualizar o avatar, por favor tente novamente.');
  }
}

function* updatePassword(params) {
  try {
    if (params.password_confirmation) {
      yield call(api.post, '/', {
        query: `
          mutation (
            $password: PasswordInput!
          ) {
            updatePassword (
              password: $password
            )
          }
        `,
        variables: {
          password: {
            old: params.old_password,
            new: params.password,
            confirmation: params.password_confirmation,
          },
        },
      });
    }
  } catch (error) {
    toast.error('Error na atualização da senha.');
  }
}

function* updateProfile(params) {
  try {
    const response = yield call(api.post, '/', {
      query: `
        mutation (
          $profile: ProfileInput!
        ) {
          profile:updateProfile (
            profile: $profile
          ) {
            uuid
            firstname
            lastname
            email
            cpf
            rg
            phone
            zipcode
            street
            street_number
            neighborhood
            city
            state
            is_responsible
            is_active
            confirmed_at
            sign_in_count
            last_sign_in_at
            current_sign_in_at
            last_sign_in_ip_address
            current_sign_in_ip_address
            organization {
              uuid
              name
              initials
            }
            avatar {
              uuid
              avatar
            }
          }
        }
      `,
      variables: {
        profile: {
          firstname: params.firstname,
          lastname: params.lastname,
          phone: params.phone,
        },
      },
    });

    toast.success('Perfil atualizado com sucesso.');

    const { data } = response.data;

    yield put(updateProfileSuccess(data));
  } catch (error) {
    toast.error('Error ao atualizar perfil, confira seus dados.');

    yield put(updateProfileFailure());
  }
}

export function* update({ payload }) {
  const { data } = payload;

  // @TODO
  // refator..

  yield updateAvatar(data);
  yield updatePassword(data);
  yield updateProfile(data);
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', update)]);
