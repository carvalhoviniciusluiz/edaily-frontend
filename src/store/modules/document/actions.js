export function documentRequest({ limit = 10, page = 1 }) {
  return {
    type: '@document/DOCUMENT_REQUEST',
    payload: { limit, page },
  };
}

export function documentSuccess(data = [], meta = {}) {
  return {
    type: '@document/DOCUMENT_SUCCESS',
    payload: { data, meta },
  };
}

export function documentDestroy(id) {
  return {
    type: '@document/DOCUMENT_DESTROY',
    payload: { id },
  };
}

export function documentForward(id) {
  return {
    type: '@document/DOCUMENT_FORWARD',
    payload: { id },
  };
}

export function documentFailure() {
  return {
    type: '@document/DOCUMENT_FAILURE',
  };
}

export function documentClean() {
  return {
    type: '@document/DOCUMENT_CLEAN',
  };
}
