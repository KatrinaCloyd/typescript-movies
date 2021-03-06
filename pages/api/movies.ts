import { shortMovie, Movie, MyMovieDetail } from "./types";

export const getMovies = async (word = 'corn'): Promise<shortMovie[] | string> => {
  const res = await fetch(`https://www.omdbapi.com/?s=${word}&apikey=8da00eef`);
  const movieArray = await res.json();
  if (movieArray.Error) {
    return 'There was a problem.';
  }

  return movieArray.Search.map((movie: Movie) => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    img: movie.Poster,
  }));
}

export const getMovieDetail = async (id: string): Promise<MyMovieDetail | string> => {
  const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=8da00eef`);
  const movie = await res.json();
  if (movie.Error) {
    return 'There was a problem.';
  }

  return {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    rating: movie.Rated,
    released: movie.Released,
    length: movie.Runtime,
    genre: movie.Genre,
    actors: movie.Actors,
    director: movie.Director,
    production: movie.Production,
    summary: movie.Plot,
    img: movie.Poster,
    ratings: movie.Ratings,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
    boxOffice: movie.BoxOffice,
  };
}
