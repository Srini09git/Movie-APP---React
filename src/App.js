import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import { dialogClasses } from '@mui/material';
import { Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


import Paper from '@mui/material/Paper';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { Home } from './Home';




function App() {

  const navigate = useNavigate();

  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{ minHeight: "100vh", borderRadius: "0%" }} elevation={0} >
        <div className="App">
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("/movie")}> Movie</Button>
              <Button color="inherit" onClick={() => navigate("/movie/add")}>AddMovie</Button>
              <Button color="inherit" onClick={() => setMode(mode === "light" ? "dark" : "light")}> {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  {mode === "light" ? "dark" : "light"} mode</Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie" element={<MovieList />} />
            <Route path="/movie/add" element={<AddMovie />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </Paper >
    </ ThemeProvider >
  );
}

export default App;
