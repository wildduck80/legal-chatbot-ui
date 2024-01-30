import React, { useState } from 'react';

function ChatInput() {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Send message to backend and handle response
    console.log(message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask your legal question..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;
