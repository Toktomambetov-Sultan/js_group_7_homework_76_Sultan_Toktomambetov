import React from "react";
import "./App.css";

import Form from "../../components/Form/Form";
import MessageItem from "../../components/MessageItem/MessageItem";
function App() {

  return (
    <div className="container">
      {/* <div className="App">
        <ul className="MessagesBlock">
          {massages.map((message) => (
            <MessageItem key={message._id} message={message} />
          ))}
        </ul>
        <Form
          authorName={authorName}
          setAuthorName={setAuthorName}
          textOfMessage={textOfMessage}
          setTextOfMessage={setTextOfMessage}
          sendMessage={sendMessage}
        />
      </div> */}
    </div>
  );
}

export default App;
