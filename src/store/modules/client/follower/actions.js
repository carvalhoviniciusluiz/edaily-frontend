export function documentFollowRequest({ limit = 10, page = 1 }) {
  return {
    type: '@document/DOCUMENT_FOLLOW_REQUEST',
    payload: { limit, page },
  };
}

export function documentFollowSuccess(data = [], meta = {}) {
  return {
    type: '@document/DOCUMENT_FOLLOW_SUCCESS',
    payload: { data, meta },
  };
}

export function documentFollowDestroy(id) {
  return {
    type: '@document/DOCUMENT_FOLLOW_DESTROY',
    payload: { id },
  };
}

export function documentFollowForward(id) {
  return {
    type: '@document/DOCUMENT_FOLLOW_FORWARD',
    payload: { id },
  };
}

export function documentFollowFailure() {
  return {
    type: '@document/DOCUMENT_FOLLOW_FAILURE',
  };
}

export function documentFollowClean() {
  return {
    type: '@document/DOCUMENT_FOLLOW_CLEAN',
  };
}
