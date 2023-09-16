import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product : productSlice
  },
});

// Define the type for your Redux state
export type RootState = ReturnType<typeof store.getState>;

export default store;
