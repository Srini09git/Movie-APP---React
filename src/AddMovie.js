import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");

    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
        };
        setMovieList([...movieList, newMovie]);
    };
    return (
        <div className="add-movie-form">
            <TextField id="outlined-basic" label="Movie Name"
                variant="outlined" color="secondary"
                onChange={(event) => setName(event.target.value)} />

            <TextField id="outlined-basic" label="Poster"
                variant="outlined" color="secondary"
                onChange={(event) => setPoster(event.target.value)} />

            <TextField id="outlined-basic" label="Rating"
                variant="outlined" color="secondary"
                onChange={(event) => setRating(event.target.value)} />

            <TextField id="outlined-basic" label="Summary"
                variant="outlined" color="secondary"
                onChange={(event) => setSummary(event.target.value)} />

            {/* Copy existing movie list & add new movie to it */}

            <Button color="secondary" variant="contained" onClick={addMovie}>Add Movie</Button>
        </div>
    );
}
