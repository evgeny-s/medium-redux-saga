import update from 'immutability-helper';

const initialState = {
  items: [],
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'ARTICLE/FETCH_SUCCESSFULLY':
      return update(state, {
        $merge: {
          items: action.payload.items,
        }
      });
    default:
      return state
  }
}

export default articleReducer;
