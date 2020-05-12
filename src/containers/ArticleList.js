import {connect} from 'react-redux';

import ArticleList from "../components/ArticleList";

const mapStateToProps = state => {
  return {
    items: state.article.items,
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
