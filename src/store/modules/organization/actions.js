export function setOrganizationType(data) {
  return {
    type: '@organization/SET_ORGANIZATION_TYPE',
    payload: { data },
  };
}

export function createOrganizationRequest(data) {
  return {
    type: '@organization/CREATE_ORGANIZATION_REQUEST',
    payload: { data },
  };
}

export function createOrganizationSuccess() {
  return {
    type: '@organization/CREATE_ORGANIZATION_SUCCESS',
  };
}

export function createOrganizationFailure() {
  return {
    type: '@organization/CREATE_ORGANIZATION_FAILURE',
  };
}
