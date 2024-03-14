import React, { useEffect ,useState } from 'react';
import axios from  "axios";
const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

  useEffect(()=>{
    const fetchData = async() => {
      try {
        let res = await axios.get('http://localhost:3000')
        console.log(res)
        setMovies(res.data); 
      } catch (error) {
        console.log("Error")
      }
    }
    fetchData();
  },[])

    
  return (
    <div> FeaturedMovies
        {movies.map((movie)=>(
            <div key={movie._id}>
                <h2>{movie.title}</h2>   
                <p>Directed by: {movie.director}</p>  
                <p>Reviews: {movie.review.length}</p>
            </div> ))}  
    </div>

  )
}

export default FeaturedMovies