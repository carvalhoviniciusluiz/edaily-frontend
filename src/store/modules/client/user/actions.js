export function save({ user, organizationId }) {
  return {
    type: '@user/SAVE',
    payload: { user, organizationId },
  };
}

export function sendForgotPassword({ email }) {
  return {
    type: '@user/SEND_FORGOT_PASSWORD',
    payload: { email },
  };
}

export function sendConfirmation({ email }) {
  return {
    type: '@user/SEND_CONFIRMATION',
    payload: { email },
  };
}

export function request({ perPage = 10, page = 1, profile }) {
  return {
    type: '@user/REQUEST',
    payload: { perPage, page, profile },
  };
}

export function fetch({ profile, uuid }) {
  return {
    type: '@user/FETCH',
    payload: { profile, uuid },
  };
}

export function fetchSuccess(user) {
  return {
    type: '@user/FETCH/SUCCESS',
    payload: { user },
  };
}

export function success(payload) {
  return {
    type: '@user/SUCCESS',
    payload,
  };
}

export function failure() {
  return {
    type: '@user/FAILURE',
  };
}

export function clean() {
  return {
    type: '@user/CLEAN',
  };
}
