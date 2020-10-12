import { CHANGE_CURRENT_MESSAGE, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS, GET_MESSAGES } from "./actionsTypes";

const initialState = {
  messages: [],
  currentMessage: {
    message: "",
    author: "",
  },
  error: {
    type: null,
    data: [],
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_ERROR:
      return { ...state, isLoading: false, error: {type: action.data.type,data: action.data.errorProps} };
    case FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case GET_MESSAGES:
      return { ...state, messages: [...action.messages, ...state.messages] };
    case CHANGE_CURRENT_MESSAGE:
      return { ...state, currentMessage: { ...state.currentMessage, [action.prop]: action.value } };
    default:
      return { ...state };
  }
};
export default reducer;
