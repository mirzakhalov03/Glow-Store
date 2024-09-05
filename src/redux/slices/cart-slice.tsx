import { createSlice } from "@reduxjs/toolkit";

type CartSliceInitialState = {
    cart: any[]
};

const initialState: CartSliceInitialState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.includes(action.payload)) {
                state.cart.push(action.payload);
                localStorage.setItem("cart", JSON.stringify(state.cart));
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((car) => car !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;