import { configureStore } from "@reduxjs/toolkit";
import { allReducers } from "./allReducers";
import { moviesAPI } from "./services/moviesAPI";

export const store = configureStore({
    reducer: { allReducers, [moviesAPI.reducerPath]: moviesAPI.reducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([moviesAPI.middleware]),
    devTools: process.env.NODE_ENV !== "production",
});
