import {connect} from 'react-redux';

import ArticleList from "../components/ArticleList";

const mapStateToProps = state => {
  return {
    items: state.article.items,
    fetchArticleErrorMessage: state.article.fetchArticleErrorMessage,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => dispatch({
      type: 'ARTICLE/FETCH',
    }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleList);
