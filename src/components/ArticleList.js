import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

function ArticleList({items, fetchArticles, fetchArticleErrorMessage}) {
  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  useEffect(() => {
    if (fetchArticleErrorMessage) {
      alert(fetchArticleErrorMessage);
    }
  }, [fetchArticleErrorMessage]);

  return (
    <table className="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Image</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
      </tr>
      </thead>
      <tbody>
      {
        items.map(({id, title, image, description}) => (
          <tr key={id}>
            <th scope="row">{id}</th>
            <td><img alt={title} width='100px' src={image} /></td>
            <td>{title}</td>
            <td>{description}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

ArticleList.propTypes = {
  items: PropTypes.array,
  fetchArticles: PropTypes.func,
  fetchArticleErrorMessage: PropTypes.string,
};

export default ArticleList;
