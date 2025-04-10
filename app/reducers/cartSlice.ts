import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CartItem} from '../types';

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    updateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.cartItems = action.payload;
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter(
        item => item.product.id !== action.payload.product.id,
      );
    },
    resetCart: state => {
      state.cartItems = [];
    },
  },
});

export const {addItem, updateCart, deleteItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
