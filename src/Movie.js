import { Counter } from './Counter';
import { useState } from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

//object destructuring

export function Movie({ movie, id, deleteButton }) {
    //conditional styling
    const styles = {
        color: movie.rating >= 8.5 ? "green" : "red",
    };
    const [show, setshow] = useState(true);
    const navigate = useNavigate();
    return (
        <Card className="movie-container">
            <img src={movie.poster} alt={movie.name} className='movie-poster' />
            <CardContent>
                <div className='movie-specs'>
                    <h2 className='movie-name'>{movie.name}
                        <IconButton color="secondary" onClick={() => setshow(!show)}>
                            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        </IconButton>
                        <IconButton color="secondary" onClick={() => navigate(`/movie/${id}`)} >
                            <InfoIcon />
                        </IconButton>
                    </h2>

                    <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
                </div>

                {/* conditional rendering */}
                {show ? <p className='movie-summary'>{movie.summary}</p> : null}
            </CardContent>
            <CardActions>
                <Counter /> {deleteButton}
            </CardActions>
        </Card  >
    );
}

export default Movie;