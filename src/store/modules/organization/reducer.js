import producer from 'immer';

const INITIAL_STATE = {
  organization_type: null,
};

export default function organiation(state = INITIAL_STATE, action) {
  return producer(state, draft => {
    switch (action.type) {
      case '@organization/SET_ORGANIZATION_TYPE': {
        draft.organization_type = action.payload.data;
        break;
      }
      case '@organization/CREATE_ORGANIZATION_REQUEST': {
        break;
      }
      case '@organization/CREATE_ORGANIZATION_SUCCESS': {
        break;
      }
      case '@organization/CREATE_ORGANIZATION_FAILURE': {
        break;
      }
      default:
    }
  });
}
