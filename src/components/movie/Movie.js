import React from 'react';



const Movie = ({Title, Poster, Year, imdbID}) => {

  function setTheYear(){
    if (Year>=2016){
      return "green"    
    }
    else if(Year>=2012){
      return "orange"
    }
    else {
      return "red"
    }
  }
  
  
  return (
      <>
      <div className='movie'>
        <img src={Poster? Poster : "https://images.unsplash.com/photo-1594908900066-3f47337549d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" } alt={Title}/>
        <div className='movie-info'>
          <h3>{Title}</h3>
          <span className={ `tag ${setTheYear(Year)}`}>{Year}</span>
        </div>
        <div className='movie-overview'>
          <h2>Overview:</h2>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</span>
        </div>
      </div>
      </>
  )
};

export default Movie;
