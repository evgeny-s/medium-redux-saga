import update from 'immutability-helper';

const initialState = {
  items: [],
  editTitle: '',
  editImage: '',
  editDescription: '',
  editText: '',

  editSuccessfully: false,
  createItemErrorMessage: '',
  fetchArticleErrorMessage: '',
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
    case 'ARTICLE/ADDED_NEW_ARTICLE_SUCCESSFULLY':
      return update(state, {
        items: {
          $push: [
            action.payload.item,
          ]
        },
        $merge: {
          editSuccessfully: true,
          editTitle: initialState.editTitle,
          editImage: initialState.editImage,
          editDescription: initialState.editDescription,
          editText: initialState.editText,
        }
      });
    case 'ARTICLE/ADDED_NEW_ARTICLE_ERROR':
      return update(state, {
        $merge: {
          createItemErrorMessage: action.payload.message,
        }
      });
    case 'ARTICLE/RESET_EDIT':
      return update(state, {
        $merge: {
          editSuccessfully: initialState.editSuccessfully,
        }
      });
    case 'ARTICLE/FETCH_ERROR':
      return update(state, {
        $merge: {
          fetchArticleErrorMessage: action.payload.message,
        }
      });
    default:
      return state
  }
}

export default articleReducer;
