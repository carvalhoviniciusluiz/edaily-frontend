export function request({ perPage = 10, page = 1, profile, user }) {
  return {
    type: '@document/REQUEST',
    payload: { perPage, page, profile, user },
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
