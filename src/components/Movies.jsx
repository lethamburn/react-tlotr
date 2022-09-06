import { useEffect, useState } from "react";
import { API } from "../services/API";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await API.get("/movie");
      setMovies(movies.data.docs);
      setLoading(false);
    };
    getMovies();
  }, []);

  if (loading) {
    return <div>Loading movies...</div>;
  }
  return (
    <section className="movies" id="movies">
      <h2>Movies</h2>
      <div className="gallery">
        {movies.map((movie, i) => {
          if (i > 1) {
            return (
              <figure key={movie._id}>
                <h3>{movie.name}</h3>
                <h4>Running time: {movie.runtimeInMinutes}</h4>
                <h4>Academy Nominations: {movie.academyAwardNominations}</h4>
                {movie.academyAwardWins > 0 ? (
                  <h4>Academy Awards: {movie.academyAwardWins}</h4>
                ) : null}
              </figure>
            );
          } else {
            null;
          }
        })}
      </div>
    </section>
  );
};

export default Movies;
