import React, { Component } from 'react';
import ContactListElement from './ContactListElement';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { contacts, onClick } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <li className={css.element} key={contact.id}>
            <ContactListElement
              onClick={onClick}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
};

export default ContactList;
