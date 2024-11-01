import { configureStore } from "@reduxjs/toolkit";

// Import the reducer for the cart slice from the specified location
import cartReducer from "./CartSlice";

// Configure and create the Redux store using the configureStore function
export const store = configureStore({
  // Define the root reducer for the store, which includes the cart reducer
  reducer: {
    // 'cart' is the slice name, and 'cartReducer' is its corresponding reducer function
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {cart: cartReducer}
export type AppDispatch = typeof store.dispatch;
