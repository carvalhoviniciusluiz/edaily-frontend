import produce from 'immer';

const INITIAL_STATE = {
  document: undefined,
  data: [],
  meta: {},
  loading: false,
};

export default function(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@document/DOCUMENT_FOLLOW_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_FETCH': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_FETCH/SUCCESS': {
        draft.document = action.payload.document;
        draft.loading = false;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_SUCCESS': {
        const { data, meta } = action.payload;

        draft.data = data;
        draft.meta = meta;
        draft.loading = false;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_DESTROY': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_FORWARD': {
        draft.loading = true;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@document/DOCUMENT_FOLLOW_CLEAN': {
        draft.data = [];
        draft.meta = {};
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
