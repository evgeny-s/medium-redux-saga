import React from 'react';

function ArticleList({items, putItemsToStore}) {
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
            <td><img width='100px' src={image} /></td>
            <td>{title}</td>
            <td>{description}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default ArticleList;
