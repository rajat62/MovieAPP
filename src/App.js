import React from 'react';
import Movie from "./components/movie/Movie";
import { useEffect, useState } from 'react';
const App = () => {

    const defaultSearch = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=avengers`;  

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
      setsearchTerm("");
      fetch(defaultSearch).then(res => res.json())
      .then(data =>{
        setMovies(data.Search);
      })
    }, [])

    const [searchTerm , setsearchTerm] = useState("")
     
    function hanleOnChange (e){
       setsearchTerm( e.target.value)
    }

    function handleOnSubmit(e){
      e.preventDefault();
      const mySearch = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${searchTerm}`;
      if(searchTerm){
      fetch(mySearch).then(res => res.json())
      .then(data =>{
        setMovies(data.Search);
        console.log(data.Search);
      })}

      setsearchTerm("");

    }


    return(
   
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
      <input 
      className='search' 
      type="text" 
      placeholder='search...' 
      value={searchTerm}
      onChange={hanleOnChange}
      />
      </form>
    </header>
    
    <div className='movie-container'> 
          {movies.length>0 && movies.map((movie)=>
            <Movie key={movie.imdbID} {...movie}/>
          )}
    </div>
    </>
    )
    
};

export default App;
