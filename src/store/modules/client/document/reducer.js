import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  meta: {},
  loading: false,
  follower: {
    document: undefined,
    data: [],
    meta: {},
    loading: false,
    openModal: false,
  },
  reviewer: {
    data: [],
    meta: {},
    loading: false,
  },
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
      //
      // DOCUMENT FOLLOWER
      //
      case '@document/FOLLOWER/REQUEST': {
        draft.follower.loading = true;
        break;
      }
      case '@document/FOLLOWER/FETCH': {
        draft.follower.openModal = false;
        break;
      }
      case '@document/FOLLOWER/FETCH/SUCCESS': {
        draft.follower.document = action.payload.document;
        draft.follower.openModal = true;
        break;
      }
      case '@document/FOLLOWER/SUCCESS': {
        const { data, meta } = action.payload;

        draft.follower.data = data;
        draft.follower.meta = meta;
        draft.follower.loading = false;
        break;
      }
      case '@document/FOLLOWER/DESTROY': {
        draft.follower.loading = true;
        break;
      }
      case '@document/FOLLOWER/FORWARD': {
        draft.follower.loading = true;
        break;
      }
      case '@document/FOLLOWER/FAILURE': {
        draft.follower.loading = false;
        break;
      }
      case '@document/FOLLOWER/CLEAN': {
        draft.follower.data = [];
        draft.follower.meta = {};
        draft.follower.loading = false;
        draft.follower.openModal = false;
        break;
      }
      //
      // DOCUMENT REVIEWER
      //
      case '@document/REVIEWER/REQUEST': {
        draft.reviewer.loading = true;
        break;
      }
      case '@document/REVIEWER/SUCCESS': {
        const { data, meta } = action.payload;

        draft.reviewer.data = data;
        draft.reviewer.meta = meta;
        draft.reviewer.loading = false;
        break;
      }
      case '@document/REVIEWER/DESTROY': {
        draft.reviewer.loading = true;
        break;
      }
      case '@document/REVIEWER/FORWARD': {
        draft.reviewer.loading = true;
        break;
      }
      case '@document/REVIEWER/FAILURE': {
        draft.reviewer.loading = false;
        break;
      }
      case '@document/REVIEWER/CLEAN': {
        draft.reviewer.data = [];
        draft.reviewer.meta = {};
        draft.reviewer.loading = false;
        break;
      }
      default:
    }
  });
}
