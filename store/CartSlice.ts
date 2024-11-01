import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single cart item
export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the type for the initial state of the cart slice
interface CartState {
  items: CartItem[];
}

// Define the initial state with type annotation
const initialState: CartState = {
  items: [],
};

// Create a slice for managing the cart state
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add an item to the cart
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    //  Remove an item from the cart
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    // Update the quantity of an item in the cart
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },

    // Increase the quantity of an item in the cart
    increaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
    },

    // Decrease the quantity of an item in the cart
    decreaseQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },

    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export action creators generated by createSlice
export const {
  addItem,
  removeItem,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

// Selector to select the cart from the state
export const selectCart = (state: { cart: CartState }) => state.cart;

// Export the reducer function generated by createSlice
export default cartSlice.reducer;
