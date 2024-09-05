import { createSlice } from "@reduxjs/toolkit";

type LikeSliceInitialState = {
    liked: string[]
}

const initialState: LikeSliceInitialState = {
    liked: JSON.parse(localStorage.getItem("liked") || "[]"),
};

const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        like: (state, action) => {
            
            if (!state.liked.includes(action.payload)) {
                state.liked.push(action.payload);
                localStorage.setItem("liked", JSON.stringify(state.liked));
            }
        },
        unlike: (state, action) => {
            state.liked = state.liked.filter((car) => car !== action.payload);
            localStorage.setItem("liked", JSON.stringify(state.liked));
        }
    }
})

export const { like, unlike } = likedSlice.actions;
export default likedSlice.reducer;
