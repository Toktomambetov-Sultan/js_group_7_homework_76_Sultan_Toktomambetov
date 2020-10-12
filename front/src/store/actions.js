import axiosOrder from "../axiosOrder";
import {
  CHANGE_CURRENT_MESSAGE,
  CLEAR_ERROR,
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  GET_MESSAGES,
} from "./actionsTypes";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};

const fetchSuccess = () => {
  return { type: FETCH_SUCCESS };
};

const fetchError = (error) => {
  return { type: FETCH_ERROR, data: { ...error } };
};

const getMessagesAction = (messages) => {
  return { type: GET_MESSAGES, messages };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERROR,
  };
};

export const changeCurrentMessage = (prop, value) => {
  return { type: CHANGE_CURRENT_MESSAGE, prop, value };
};

export const getMessages = (datetime) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      const response = await axiosOrder.get("/messages?datetime=" + (datetime ? datetime : ""));
      dispatch(getMessagesAction(response.data.reverse()));
      dispatch(fetchSuccess);
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};
export const addMessage = (message) => {
  return async (dispatch) => {
    dispatch(fetchRequest());
    try {
      await axiosOrder.post("/messages", message);
      dispatch(fetchSuccess);
    } catch (error) {
      dispatch(fetchError(error.response.data));
    }
  };
};
