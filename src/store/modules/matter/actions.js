export function matterRequest({ limit = 10, page = 1 }) {
  return {
    type: '@matter/MATTER_REQUEST',
    payload: { limit, page },
  };
}

export function matterSuccess(data = [], meta = {}) {
  return {
    type: '@matter/MATTER_SUCCESS',
    payload: { data, meta },
  };
}

export function matterDestroy(id) {
  return {
    type: '@matter/MATTER_DESTROY',
    payload: { id },
  };
}

export function matterForward(id) {
  return {
    type: '@matter/MATTER_FORWARD',
    payload: { id },
  };
}

export function matterFailure() {
  return {
    type: '@matter/MATTER_FAILURE',
  };
}

export function matterClean() {
  return {
    type: '@matter/MATTER_CLEAN',
  };
}
