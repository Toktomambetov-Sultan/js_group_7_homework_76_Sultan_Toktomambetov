import React from "react";
import { useSelector } from "react-redux";
import "./Form.css";
export default function Form(props) {
  const { currentMessage, error } = useSelector((state) => state);
  console.log(error);
  return (
    <div className="Form">
      <form onSubmit={props.onSubmit}>
        <label className="Form__label">
          <span className="Form-group__name">Логин: {}</span>
          <input
            className="Form__input"
            onChange={props.onChange}
            name="author"
            value={currentMessage.author}
            type="text"
          />
        </label>
        <label className="Form__label">
          <span className="Form-group__name">Сообщение:</span>
          <textarea
            className="Form__textarea"
            onChange={props.onChange}
            name="message"
            value={currentMessage.message}
          ></textarea>
        </label>
        <button className="Form__submit-btn" type="submit">
          send
        </button>
      </form>
    </div>
  );
}
