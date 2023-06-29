import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        title: undefined,
        genre: undefined,
        cinemaId: undefined,
    },
    movies: [],
};

export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setMoviesProperty: (state, { payload }) => {
            state.movies = payload;
        },
        setTitleFilterProperty: (state, { payload }) => {
            state.filters.title = payload;
        },
        setGenreFilterProperty: (state, { payload }) => {
            state.filters.genre = payload;
        },
        setCinemaIdFilterProperty: (state, { payload }) => {
            state.filters.cinemaId = payload;
        },
    },
});

export const moviesReducer = moviesSlice.reducer;
export const moviesActions = moviesSlice.actions;
