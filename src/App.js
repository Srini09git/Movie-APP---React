import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { useState } from 'react';
import { MovieList } from './MovieList';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}


//object destructuring
export function Movie({ movie }) {
  //conditional styling
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const [show, setshow] = useState(true);
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}
          <IconButton color="secondary" onClick={() => setshow(!show)}>
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton></h2>
        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div>


      {/* conditional rendering */}
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      <Counter />
    </div>
  )
}


export default App;
