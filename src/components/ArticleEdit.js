import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

function ArticleEdit(
  {
    title,
    image,
    description,
    text,
    onSubmit,
    editField,
    errorMessage,
    editSuccessfully,
    reset,
  }
) {
  useEffect(() => {
    if (errorMessage) {
      alert('Something went wrong. Try again later.');
    }
  }, [errorMessage]);

  function submit(e) {
    e.preventDefault();

    onSubmit();
  }

  function changeField(fieldName, e) {
    editField(fieldName, e.target.value);
  }

  const fields = [{
    value: title,
    name: 'Title',
  }, {
    value: image,
    name: 'Image',
  }, {
    value: description,
    name: 'Description',
  }, {
    value: text,
    name: 'Text',
  }];

  if (editSuccessfully) {
    reset();

    return (
      <Redirect to='/articles'/>
    );
  }

  return (
    <div>
      <form onSubmit={submit}>
        {
          fields.map((field) => (
            <div className="form-group" key={field.name}>
              <label htmlFor={`id-${field.name}`}>{field.name}</label>
              <input
                value={field.value}
                className="form-control"
                id={`id-${field.name}`}
                placeholder={`Enter ${field.name}`}
                onChange={changeField.bind(this, field.name)}
                required
              />
            </div>
          ))
        }
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

ArticleEdit.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  text: PropTypes.string,
  editField: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  editSuccessfully: PropTypes.bool,
  reset: PropTypes.func,
};

export default ArticleEdit;
