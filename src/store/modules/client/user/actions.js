export function request({ limit = 10, page = 1, ...data }) {
  return {
    type: '@user/REQUEST',
    payload: { limit, page, ...data },
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
