import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "../slice/LikeSlice";

const store = configureStore({
    reducer: {
        like: likeReducer,

    },
});

export {store};