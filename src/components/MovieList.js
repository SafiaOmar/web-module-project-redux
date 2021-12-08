import React from 'react';
import {connect} from "react-redux";
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props)=> {
    const movies = [];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {props.movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

const mapStateAsProps = (state) => {
    console.log(state);
    return {
      movies: state.movies.movies,
    };
  };
export default connect(mapStateAsProps)(MovieList);