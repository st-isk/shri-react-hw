import { combineReducers } from "@reduxjs/toolkit";
import { moviesReducer } from "@/redux/features/movies";
import { moviesAPI } from "./services/moviesAPI";

export const allReducers = combineReducers({
    movies: moviesReducer,
});
