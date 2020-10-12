import React from "react";
import { useSelector } from "react-redux";
import "./Form.css";
const translator = {
  message: "Сообщение не введено",
  author: "Укажите свое имя",
};
export default function Form(props) {
  const { currentMessage, error } = useSelector((state) => state);
  const errorProps =
    error.type === "props error"
      ? {
          ...error.data.reduce((acc, item) => ({ ...acc, [item]: translator[item] }), {}),
        }
      : {};
  return (
    <div className="Form">
      <form onSubmit={props.onSubmit}>
        <label className="Form__label">
          <span className="Form-group__name">Логин: </span>
          <span>{errorProps.author ? errorProps.author : ""}</span>
          <input
            className="Form__input"
            onChange={props.onChange}
            name="author"
            value={currentMessage.author}
            type="text"
          />
        </label>
        <label className="Form__label">
          <span className="Form-group__name">Сообщение: </span>
          <span>{errorProps.message ? errorProps.message : ""}</span>
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
