export function request({ limit = 10, page = 1, organizationId, userId }) {
  return {
    type: '@document/REQUEST',
    payload: { limit, page, organizationId, userId },
  };
}

export function success(payload) {
  return {
    type: '@document/SUCCESS',
    payload,
  };
}

export function failure() {
  return {
    type: '@document/FAILURE',
  };
}

export function clean() {
  return {
    type: '@document/CLEAN',
  };
}
