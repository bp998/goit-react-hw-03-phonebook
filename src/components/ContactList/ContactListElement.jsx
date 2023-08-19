import React, { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactListElement extends Component {
  render() {
    const { name, number, id, onClick } = this.props;

    return (
      <div className={css.list}>
        {name}: {number}
        <button onClick={() => onClick(id)} id={id} type="button">
          Delete
        </button>
      </div>
    );
  }
}

ContactListElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListElement;
