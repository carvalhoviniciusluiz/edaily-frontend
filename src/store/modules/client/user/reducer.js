import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  meta: {},
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/REQUEST': {
        draft.loading = true;
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
        break;
      }
      case '@user/CLEAN': {
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
