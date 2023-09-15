const initialState = 0;
const changeNumber = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECREMENT") {
    return state - 1;
  }

  return state
};
export default changeNumber;
