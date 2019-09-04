import React from 'react';
import './Sidebar.css';
import PropTypes from 'prop-types';
import User from '../containers/User';

const Sidebar = ({ contacts }) => (
  <aside className="Sidebar">
    {contacts.map(contact => (
      <User user={contact} key={contact.user_id} />
    ))}
  </aside>
);

Sidebar.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default Sidebar;
