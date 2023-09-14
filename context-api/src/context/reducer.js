const reducer = (state, action) => {
  if (action.type === "updateName") {
    return { ...state, userName: action.payload };
  }

  if (action.type === "updateAge") {
    return { ...state, age: action.payload };
  }
};

export default reducer;
