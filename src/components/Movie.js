import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteMovie } from "../actions/movieActions";
import { addFavorite } from "../actions/favoritesActions";

const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movie = props.movies.find((movie) => movie.id === Number(id));
    const deleteMovie = (e) => {
      e.preventDefault();
      props.deleteMovie(Number(id));
      push("/movies");
    };
    const favoriteMovie = (e) => {
      e.preventDefault();
      props.favoriteMovie(movie);
    };

    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{movie.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{movie.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{movie.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{movie.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{movie.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{movie.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      movies: state.movies.movies,
      favorites: state.favorites,
    };
  };
export default connect(mapStateToProps, {deleteMovie, addFavorite})(Movie);