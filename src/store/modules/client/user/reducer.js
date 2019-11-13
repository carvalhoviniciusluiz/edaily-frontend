import produce from 'immer';

const INITIAL_STATE = {
  user: undefined,
  data: [],
  meta: {},
  loading: false,
  openModal: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SAVE': {
        break;
      }
      case '@user/SEND_FORGOT_PASSWORD': {
        break;
      }
      case '@user/SEND_CONFIRMATION': {
        break;
      }
      case '@user/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/FETCH': {
        draft.openModal = false;
        break;
      }
      case '@user/FETCH/SUCCESS': {
        draft.user = action.payload.user;
        draft.openModal = true;
        break;
      }
      case '@user/SUCCESS': {
        const { data, meta } = action.payload;

        draft.data = data;
        draft.meta = meta;
        draft.loading = false;
        break;
      }
      case '@user/FAILURE': {
        draft.loading = false;
        draft.openModal = false;
        break;
      }
      case '@user/CLEAN': {
        draft.user = undefined;
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        draft.openModal = false;
        break;
      }
      default:
    }
  });
}
