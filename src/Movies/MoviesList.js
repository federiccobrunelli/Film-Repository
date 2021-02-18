/* eslint react/no-did-mount-set-state: 0 */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styled from 'styled-components';

import { getMovies } from './actions';
import Movie from './Movie';


function MoviesList({ movies, isLoaded,  getMovies }) {

  useEffect(() => {
    !isLoaded ? getMovies() : null
  }, [])

  return (
    <MovieGrid>
      {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
    </MovieGrid>
  )
}


const mapStateToProps = state => ({
  movies: state.moviesReducer.movies,
  isLoaded: state.moviesReducer.isMoviesListLoaded
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getMovies,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);







const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
