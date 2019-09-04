import React from 'react';
import './App.css';
import _ from 'lodash';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import store from '../store';

function App() {
  const { contacts, user, activeUserId } = store.getState();
  console.log(user);
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts.contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
