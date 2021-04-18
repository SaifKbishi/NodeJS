import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Movies = () => {
  console.log('JS from Movies react ');
  const [results, setResults] = useState({
    title :"not set yet"
  });

  useEffect(() => {
    console.log('i only run once'); 
  
    const simpleFetch = async ()=>{
     const {data} = await axios.get('/api/movies/getallmovies');
     console.log('data:',data);
     setResults(data);
    };//simpleFetch function
    simpleFetch();
   }, []);

   const renderMovies = results.map((movie)=>{
     return(
       <>
       <li key={movie.id}>{movie.title}, {movie.genre}</li>
       </>
     );
   });
   
 return (
    document.title="Movies",
    console.log('23',results),
    <div className="App" >     
     hello from Movies
     <br/><br/>  
     <button>get movies</button>
     <h1 value="jj">Title is: {results.title}</h1>
     <h4>
     {renderMovies}
     </h4>
    </div>
  );//return
}//Movies

export default Movies;

//saif-movie-app