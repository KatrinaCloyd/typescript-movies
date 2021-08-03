// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Movie = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string,
}

export type shortMovie = {
  title: string,
  year: string,
  id: string,
  img: string,
}

export const getMovies = async (word = 'love'): Promise<shortMovie[]> => {
  const res = await fetch(`https://www.omdbapi.com/?s=${word}&apikey=8da00eef`);
  const movieArray = await res.json();

  return movieArray.Search.map((movie: Movie) => ({
    title: movie.Title,
    year: movie.Year,
    id: movie.imdbID,
    img: movie.Poster,
  }));
}
