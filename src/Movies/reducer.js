const initialState = {
  movies: [],
  isMoviesListLoaded: false,

  movie: {},
  isMovieLoaded: false,
};

export default function (state = initialState, action) {
  const { type, data } = action; // type === action.type

  switch (type) {
    case 'GET_MOVIES':
      return {
        ...state,
        movies: data,
        isMoviesListLoaded: true,
      };

    case 'GET_MOVIE':
      return {
        ...state,
        movie: data,
      }

    case 'RESET_MOVIE':
    return {
      ...state,
      movie: {},
    }
      
    default:
      return state;
  }

}