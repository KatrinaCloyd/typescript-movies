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

export type MovieDetail = {
    Title: string,
    Year: string,
    Rated: string,
    Released: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Writer: string,
    Actors: string,
    Plot: string,
    Language: string,
    Country: string,
    Awards: string,
    Poster: string,
    Ratings: [
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        },
        {
            Source: string,
            Value: string
        }
    ],
    Metascore: string,
    imdbRating: string,
    imdbVotes: string
    imdbID: string,
    Type: string,
    DVD: string,
    BoxOffice: string,
    Production: string,
    Website: string,
    Response: string
}

export type Rating = {
    Source: string,
    Value: string
}

export type MyMovieDetail = {
    id: string,
    title: string,
    year: string,
    rating: string,
    released: string,
    length: string,
    genre: string,
    actors: string,
    director: string,
    production: string,
    summary: string,
    img: string,
    ratings: Rating[],
    imdbRating: string,
    imdbVotes: string
    boxOffice: string,
}