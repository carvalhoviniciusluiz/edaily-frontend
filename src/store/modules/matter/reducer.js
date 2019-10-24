import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  meta: {},
  loading: false,
};

export default function matter(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@matter/MATTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@matter/MATTER_SUCCESS': {
        const { data, meta } = action.payload;

        draft.data = data;
        draft.meta = meta;
        draft.loading = false;
        break;
      }
      case '@matter/MATTER_DESTROY': {
        draft.loading = true;
        break;
      }
      case '@matter/MATTER_FORWARD': {
        draft.loading = true;
        break;
      }
      case '@matter/MATTER_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@matter/MATTER_CLEAN': {
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
