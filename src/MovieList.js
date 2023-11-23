import { useState } from 'react';
import { Movie } from "./Movie";
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
export function MovieList() {
    const [movieList, setMovieList] = useState([]);

    const getMovies = () => {
        fetch("https://63bc390acf99234bfa742723.mockapi.io/movies", {
            method: "GET",
        }).then((data) => data.json()).then((mvs) => setMovieList(mvs));
    };


    useEffect(() => getMovies(), []);



    const deleteMovie = (id) => {
        // delete -> refrest the data 
        fetch(`https://63bc390acf99234bfa742723.mockapi.io/movies/${id} `, {
            method: "DELETE",
        }).then((data) => getMovies())
    };


    return (
        <div>

            <div className='movie-list'>
                {/* parent --> child (props) */}
                {movieList.map((mv, index) => (
                    <div key={mv.id}>
                        <Movie movie={mv} id={mv.id}
                            deleteButton={<IconButton onClick={() => deleteMovie(mv.id)} aria-label="delete" color="error">
                                <DeleteIcon />
                            </IconButton>} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;