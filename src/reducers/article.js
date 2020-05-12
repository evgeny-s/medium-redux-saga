import update from 'immutability-helper';

const initialState = {
  items: [],
  editTitle: '',
  editImage: '',
  editDescription: '',
  editText: '',
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case 'ARTICLE/FETCH_SUCCESSFULLY':
      return update(state, {
        $merge: {
          items: action.payload.items,
        }
      });
    case 'ARTICLE/EDIT_FIELD':
      return update(state, {
        $merge: {
          [`edit${action.payload.fieldName}`]: action.payload.value,
        }
      });
    default:
      return state
  }
}

export default articleReducer;
