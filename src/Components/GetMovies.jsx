import React, { useEffect, useState } from "react";

const GetMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await fetch("/movies");

      if (!response.ok) {
        throw new Error(`Server returned ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get("content-type");

      // Check if the response is JSON
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        setMovies(data);
        console.log(data);
      } else {
        // If the response is not JSON, handle it accordingly
        throw new Error("Response is not in JSON format");
      }
    } catch (err) {
      console.error("Error fetching movies:", err.message);
      setError(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      {error ? (
        <p>Error loading movies: {error}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetMovies;
