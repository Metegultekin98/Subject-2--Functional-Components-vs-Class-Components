import React, { FC, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import { User } from './models';

function App() {
  const [user, setUser] = useState<User>({
    id: 0,
    firstName: 'Mete',
    lastName: 'Gültekin',
    city: 'Istanbul'
  })

  return (
    <div className="App">
      <header className="App-header">
        <FunctionalComponent firstName={user.firstName} lastName={user.lastName} />
        <ClassComponent firstName={user.firstName} lastName={user.lastName} />
      </header>
    </div>
  );
}

export default App;
