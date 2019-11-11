export function sendConfirmation({ email }) {
  return {
    type: '@user/SEND_CONFIRMATION',
    payload: { email },
  };
}

export function request({ limit = 10, page = 1, organizationId }) {
  return {
    type: '@user/REQUEST',
    payload: { limit, page, organizationId },
  };
}

export function fetch({ organizationId, userId }) {
  return {
    type: '@user/FETCH',
    payload: { organizationId, userId },
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
