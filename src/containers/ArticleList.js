import {connect} from 'react-redux';

import ArticleList from "../components/ArticleList";

const mapStateToProps = state => {
  return {
    items: state.article.articles,
  }
};
const mapDispatchToProps = dispatch => {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);
