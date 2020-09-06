import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import { pagination } from './utlis/pagination';
import { ListGroup } from './common/listGroup';

class Vidly extends Component {
    state = {
        movies: [],
        pageSize: 3,
        currentPage: 1,
        genres: []
    }

    componentDidMount () {
        this.setState({movies: getMovies(), genres: getGenres()});
    }

    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies})
    }

    handleLike = movie => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies}); 
    }

    handlePageChange = page => {
        this.setState({currentPage: page});
    }

    handleGenreSelect = genre => {

    }

    render() { 
        if(!this.state.movies.length)
            return <p className="py-4 text-center container" >No Movies :(</p>
        
        const allMovies = pagination(this.state.movies, this.state.currentPage, this.state.pageSize)

        return(
            <div className="container py-4 row mx-auto">
                <div className="col-3">
                    <ListGroup items={this.state.genres} onItemSelect={this.handleGenreSelect}  />
                </div>
                <div className="col">
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
                                {allMovies.map(movie => {
                                    return(
                                        <tr key={movie._id}>
                                            <td>{movie.title}</td>
                                            <td>{movie.genre.name}</td>
                                            <td>{movie.numberInStock}</td>
                                            <td>{movie.dailyRentalRate}</td>
                                            <td onClick={() =>this.handleLike(movie)} > {movie.liked? <i className='fa fa-heart' />: <i className="fa fa-heart-o"  />} </td>
                                            <td> <button className="btn btn-danger" onClick={() => this.handleDelete(movie)} >Delete</button> </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                    </table>
                    <Pagination 
                        itemsCount={this.state.movies.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>

            </div>
        )
    }
}
 
export default Vidly;