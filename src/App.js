import React from 'react';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="chat-container">
        <ChatBox />
        <ChatInput />
      </div>
    </div>
  );
}

export default App;
