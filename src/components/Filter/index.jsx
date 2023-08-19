import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label>
        <p className={css.search}>Find contacts by name</p>
        <input onChange={onChange} type="text" name="filter" />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
