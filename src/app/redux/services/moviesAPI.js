import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesAPI = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
    endpoints: (builder) => ({
        getMovies: builder.query({ query: () => "movies" }),
        getMovieById: builder.query({
            query: (movieId) => `movie?movieId=${movieId}`,
        }),
        getMoviesByCinemaId: builder.query({
            query: (cinemaId) => `movies?cinemaId=${cinemaId}`,
        }),
    }),
});

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetMoviesByCinemaIdQuery,
} = moviesAPI;
