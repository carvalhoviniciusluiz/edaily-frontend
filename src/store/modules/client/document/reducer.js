import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  meta: {},
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@document/REQUEST': {
        draft.loading = true;
        break;
      }
      case '@document/SUCCESS': {
        const { data, meta } = action.payload;

        draft.data = data;
        draft.meta = meta;
        draft.loading = false;
        break;
      }
      case '@document/FAILURE': {
        draft.loading = false;
        draft.openModal = false;
        break;
      }
      case '@document/CLEAN': {
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
