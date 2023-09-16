import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "redux";

export const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = STATUSES.ERROR;
      });
  },
});

// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export const fetchProducts = (): ThunkAction<void, RootState,    unknown, any> => {
// export const fetchProducts = () => {
//   return async function fetchProductsThunk(dispatch: Dispatch) {
//     try {
//       dispatch(setStatus(STATUSES.LOADING));

//       const res = await fetch("https://fakestoreapi.com/products");
//       if (!res.ok) {
//         dispatch(setStatus(STATUSES.ERROR));
//         return;
//       }
//       const data = await res.json();
//       dispatch(setProducts(data));

//       dispatch(setStatus(STATUSES.IDLE));
//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// };
