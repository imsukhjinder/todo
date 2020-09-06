import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import { getMovies } from '../services/fakeMovieService';

class Vidly extends Component {
    state = {
        movies: getMovies()   
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }

    render() { 
        if(!this.state.movies.length)
            return <p className="py-4 text-center container" >No Movies :(</p>
        return(
            <div className="container py-4">
                There are {this.state.movies.length} Movies in the Database
                <table className="table mt-3" >
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genere</th>
                            <th>In Stock</th>
                            <th>Rate</th>
                            <th>Liked</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(movie => {
                                return(
                                    <tr key={movie._id}>
                                        <td>{movie.title}</td>
                                        <td>{movie.genre.name}</td>
                                        <td>{movie.numberInStock}</td>
                                        <td>{movie.dailyRentalRate}</td>
                                        <td> {movie.liked? <i className='fa fa-heart' />: <i className="fa fa-heart-o"  />} </td>
                                        <td> <button className="btn btn-danger" onClick={() => this.handleDelete(movie)} >Delete</button> </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </table>
            </div>
        )
    }
}
 
export default Vidly;