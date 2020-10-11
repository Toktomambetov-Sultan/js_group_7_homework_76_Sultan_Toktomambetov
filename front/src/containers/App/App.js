import React from "react";
import "./App.css";
import Form from "../../components/Form/Form";
import MessageItem from "../../components/MessageItem/MessageItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addMessage, changeCurrentMessage, getMessages } from "../../store/actions";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const addMessageHandler = (message) => dispatch(addMessage(message));

  const changeCurrentMessageHandler = (prop, message) => dispatch(changeCurrentMessage(prop, message));

  const onSubmit = (event) => {
    event.preventDefault();
    addMessageHandler(state.currentMessage);
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    changeCurrentMessageHandler(name, value);
  };

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  
  return (
    <div className="container">
      <div className="App">
        <ul className="MessagesBlock">
          {state.messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </ul>
        <Form onChange={onChange} onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default App;
