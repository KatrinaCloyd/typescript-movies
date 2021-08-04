/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useState } from 'react'

import { shortMovie } from '../pages/api/types'
import { getMovieDetail } from '../pages/api/movies'
import styles from '../styles/Home.module.css'

export default function MovieCard(movie: shortMovie) {

    const [popUpOpen, showPopUp] = useState(false);
    const [detailInfo, setDetailInfo] = useState();

    const getDetailInfo = (id: string) => {
        getMovieDetail(id)
            .then(setDetailInfo)
            .finally(() => showPopUp(true))
    }

    return (
        <>
            <div key={movie.id} className={styles.card} onClick={() => getDetailInfo(movie.id)}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <Image
                    src={movie.img}
                    alt="movie poster"
                    width={200}
                    height={300}
                />
            </div>
            {popUpOpen &&
                <div className={styles.popupOutter}>
                    <section
                        className={styles.popup}
                        onClick={() => showPopUp(false)} >
                        <img src={detailInfo.img}
                            alt="movie poster"
                            className={styles.detailPoster}
                        />
                        <section>
                            <h2>{detailInfo.title}</h2>
                            <p>Rated: {detailInfo.rating}</p>
                            <p>Release Date: {detailInfo.released}</p>
                            <p>Run Time: {detailInfo.length}</p>
                            <p>Genre: {detailInfo.genre}</p>
                            <p>Summary: {detailInfo.summary}</p>
                            <p>Actors: {detailInfo.actors}</p>
                            <p>Director: {detailInfo.director}</p>
                            <p>Production Company: {detailInfo.production}</p>
                            <h3>Ratings:</h3>
                            {detailInfo.ratings.map((e) => <p key={e.index}>{e.Source}: {e.Value}</p>)}
                            <p>IMDB: {detailInfo.imdbRating} stars  - with {detailInfo.imdbVotes} votes</p>
                            <p>Box Office Gains: {detailInfo.boxOffice}</p>
                        </section>
                    </section>
                </div>}
        </>
    )
}
