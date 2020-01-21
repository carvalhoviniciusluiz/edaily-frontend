export function documentFollowRequest({ page = 1, perPage = 10, profile }) {
  return {
    type: '@document/DOCUMENT_FOLLOW_REQUEST',
    payload: { page, perPage, profile },
  };
}

export function documentFollowFetch({ documentUUID, profile }) {
  return {
    type: '@document/DOCUMENT_FOLLOW_FETCH',
    payload: { documentUUID, profile },
  };
}

export function documentFollowFetchSuccess(document) {
  return {
    type: '@document/DOCUMENT_FOLLOW_FETCH/SUCCESS',
    payload: { document },
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
