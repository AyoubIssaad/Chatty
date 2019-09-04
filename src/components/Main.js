import React from 'react';
import './Main.css';
import PropTypes from 'prop-types';
import Empty from './Empty';
import ChatWindow from '../containers/ChatWindow';

const Main = ({ user, activeUserId }) => {
  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    }
    return <ChatWindow activeUserId={activeUserId} />;
  };
  return <main className="Main">{renderMainContent()}</main>;
};

Main.propTypes = {
  user: PropTypes.object,
  activeUserId: PropTypes.string,
};

export default Main;
