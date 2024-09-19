import { createSlice } from "@reduxjs/toolkit";

type LikedProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
};

type LikeSliceInitialState = {
  liked: LikedProduct[];
};

const initialState: LikeSliceInitialState = {
  liked: JSON.parse(localStorage.getItem("liked") || "[]"),
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    like: (state, action) => {
      const product = action.payload;

      if (!state.liked.some((item) => item.id === product.id)) {
        state.liked.push(product);
        localStorage.setItem("liked", JSON.stringify(state.liked));
      }
    },
    unlike: (state, action) => {
      state.liked = state.liked.filter((item) => item.id !== action.payload);
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
  },
});

export const { like, unlike } = likedSlice.actions;
export default likedSlice.reducer;
