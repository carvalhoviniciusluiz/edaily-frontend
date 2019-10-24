import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  meta: {},
  loading: false,
};

export default function document(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@document/DOCUMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_SUCCESS': {
        const { data, meta } = action.payload;

        draft.data = data;
        draft.meta = meta;
        draft.loading = false;
        break;
      }
      case '@document/DOCUMENT_DESTROY': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FORWARD': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@document/DOCUMENT_CLEAN': {
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
