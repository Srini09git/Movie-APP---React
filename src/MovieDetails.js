import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function MovieDetails({ movieList }) {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);
    useEffect(
        () => {
            fetch(`https://63bc390acf99234bfa742723.mockapi.io/movies/${id}`, {
                method: "GET",
            }).then((data) => data.json()).then((mv) => setMovie(mv))
        }, []);

    const navigate = useNavigate();
    console.log(movieList, movie);
    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };
    return (<div>
        <h1>Movie Detail Page...{movie.name}</h1>
        <iframe width="100%" height="750px" src={movie.trailer} title="Avatar: The Way of Water | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="movie-detail">
            <div className='movie-specs'>
                <h2 className='movie-name'>{movie.name}</h2>
                <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
            </div>
            <p className='movie-summary'>⭐{movie.summary}</p>
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)} startIcon={<ChevronLeftIcon />}>back</Button>
        </div>

    </div>);
}
