const selectMoviesSlice = (state) => state.movies;

export const selectMovies = (state) => selectMoviesSlice(state).movies;
export const selectTitleFilter = (state) =>
    selectMoviesSlice(state).filters.title;
export const selectGenreFilter = (state) =>
    selectMoviesSlice(state).filters.genre;
export const selectCinemaIdFilter = (state) =>
    selectMoviesSlice(state).filters.cinemaId;
