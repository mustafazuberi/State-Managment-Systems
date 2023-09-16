import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/interfaces";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const alreadyExists = state.filter(
        (item: Product) => item.id === action.payload.id
      ).length;

      if (alreadyExists) {
        state.forEach((item: Product) => {
          if (item.id === action.payload.id) {
            item.qty += 1;
          }
        });
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },

    increase(state, action) {
      state.forEach((item: Product) => {
        if (item.id === action.payload.id) {
          item.qty += 1;
        }
      });
    },

    decrease(state, action) {
      state.forEach((item: Product) => {
        if (item.id === action.payload.id) {
          if (item.qty > 1) {
            item.qty -= 1;
          } else {
            return state.filter((item) => item.id !== action.payload);
          }
        }
      });
    },
  },
});

export const { add, remove, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
