import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export const Searchbar = ({ sendSubmitKeyword }) => {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = e => {
    const serchValue = e.currentTarget.value.trim().toLowerCase();
    setKeyword(serchValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const keywordNormalize = keyword.trim();
    if (keywordNormalize === '') {
      Notify.info('Please enter something and try again');
      return;
    }
    sendSubmitKeyword(keywordNormalize.toLocaleLowerCase());
    resetForm();
  };

  const resetForm = () => {
    setKeyword('');
  };
  return (
    <header className="searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <FcSearch className="serchIcon" />
          <span className="SearchFormButton-label">Search</span>
        </button>

        <input
          className="SearchFormButton-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleKeywordChange}
          value={keyword}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  sendSubmitKeyword: PropTypes.func.isRequired,
};
