import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    keyword: '',
  };

  handleKeywordChange = e => {
    const serchValue = e.currentTarget.value.trim().toLowerCase();
    this.setState({ keyword: serchValue });
  };
  handleSubmit = e => {
    e.preventDefault();
    const keyword = this.state.keyword.trim();
    if (keyword === '') {
      Notify.info('Please enter something and try again');
      return;
    }
    this.props.sendSubmitKeyword(keyword.toLocaleLowerCase());
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ keyword: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
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
            onChange={this.handleKeywordChange}
            value={this.state.keyword}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  sendSubmitKeyword: PropTypes.func.isRequired,
};
