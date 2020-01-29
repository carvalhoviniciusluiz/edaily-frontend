// DOCUMENT FOLLOWER
// DOCUMENT
//
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

// DOCUMENT FOLLOWER
//
export function followerRequest({ page = 1, perPage = 10, profile }) {
  return {
    type: '@document/FOLLOWER/REQUEST',
    payload: { page, perPage, profile },
  };
}

export function followerFetch({ documentUUID, profile }) {
  return {
    type: '@document/FOLLOWER/FETCH',
    payload: { documentUUID, profile },
  };
}

export function followerFetchSuccess(document) {
  return {
    type: '@document/FOLLOWER/FETCH/SUCCESS',
    payload: { document },
  };
}

export function followerSuccess(data = [], meta = {}) {
  return {
    type: '@document/FOLLOWER/SUCCESS',
    payload: { data, meta },
  };
}

export function followerDestroy(id) {
  return {
    type: '@document/FOLLOWER/DESTROY',
    payload: { id },
  };
}

export function followerForward(id) {
  return {
    type: '@document/FOLLOWER/FORWARD',
    payload: { id },
  };
}

export function followerFailure() {
  return {
    type: '@document/FOLLOWER/FAILURE',
  };
}

export function followerClean() {
  return {
    type: '@document/FOLLOWER/CLEAN',
  };
}

// DOCUMENT REVIEWER
//
export function reviewerRequest({ limit = 10, page = 1 }) {
  return {
    type: '@document/REVIEWER/REQUEST',
    payload: { limit, page },
  };
}

export function reviewerSuccess(data = [], meta = {}) {
  return {
    type: '@document/REVIEWER/SUCCESS',
    payload: { data, meta },
  };
}

export function reviewerDestroy(id) {
  return {
    type: '@document/REVIEWER/DESTROY',
    payload: { id },
  };
}

export function reviewerForward(documentUUID, profile) {
  return {
    type: '@document/REVIEWER/FORWARD',
    payload: { documentUUID, profile },
  };
}

export function reviewerFailure() {
  return {
    type: '@document/REVIEWER/FAILURE',
  };
}

export function reviewerClean() {
  return {
    type: '@document/REVIEWER/CLEAN',
  };
}
