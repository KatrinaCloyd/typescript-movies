import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react'
import { getMovies } from './api/movies'
import { shortMovie } from './api/movies'

import MovieCard from '../components/Movie'

export default function Home() {
  // const info = await getMovies();
  const [info, setInfo] = useState([]);


  useEffect(() => {
    getMovies()
      .then(setInfo)
      .finally(() => console.log(info))
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Poster List</title>
        <meta name="description" content="lets play with some next typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Hello World of Typescript!
        </h1>
        <section className={styles.list}>
          {info.map((e: shortMovie) => <MovieCard {...e} key={e.id} />)}
        </section>
      </main>
    </div>
  )
}
