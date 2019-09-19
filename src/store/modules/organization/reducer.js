import producer from 'immer';

const INITIAL_STATE = {};

export default function organiation(state = INITIAL_STATE, action) {
  return producer(state, _draft => {
    switch (action.type) {
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
