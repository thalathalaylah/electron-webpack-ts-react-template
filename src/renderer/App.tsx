import React from 'react';
import icon from './icon.png';
import './App.css';

import { CreateFileButton } from './CreateFileButton';

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={icon} className="App-logo" alt="logo" />
      <p>Hello Electron and Typescript and React and more world !</p>
      <CreateFileButton />
    </div>
  );
};

export default App;
