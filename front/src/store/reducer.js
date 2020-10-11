const initialState = {
  messages: [],
  currentMessage: {
    message: "",
    author: "",
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
export default reducer;
