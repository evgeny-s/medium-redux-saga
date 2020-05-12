import {connect} from 'react-redux';

import ArticleEdit from "../components/ArticleEdit";

const mapStateToProps = state => {
  return {
    title: state.article.editTitle,
    image: state.article.editImage,
    description: state.article.editDescription,
    text: state.article.editText,
  }
};
const mapDispatchToProps = (dispatch, state) => {
  return {
    editField: (fieldName, value) => dispatch({
      type: 'ARTICLE/EDIT_FIELD',
      payload: {
        fieldName,
        value
      }
    }),
    onSubmit: () => dispatch({
      type: 'ARTICLE/ADD_NEW_ARTICLE',
    }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleEdit);
