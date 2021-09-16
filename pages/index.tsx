import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { FormEvent, useEffect, useState } from 'react'
import { getMovies } from './api/movies'
import { shortMovie } from './api/types'

import MovieCard from '../components/Movie'

export default function Home() {

  const [info, setInfo] = useState<shortMovie[] | string>('');

  useEffect(() => {
    getMovies()
      .then(setInfo)
  }, [])


  const [searchTerm, setSearchTerm] = useState('');

  const searchSubmit = (e: FormEvent) => {
    e.preventDefault();
    getMovies(searchTerm)
      .then(setInfo)
      .finally(() => setSearchTerm(''))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Poster List</title>
        <meta name="description" content="lets play with some next typescript" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Let&rsquo;s Look at Some Movies!
        </h1>
        <h3>Oh, you don&rsquo;t like corney movies? Fine you can search for your own!</h3>
        <form onSubmit={(e) => searchSubmit(e)}>
          <input
            type='text'
            placeholder='Ex: Batman'
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button>Search!</button>
        </form>
        <section className={styles.list}>
          {typeof info !== "string" ?
            info.map((e: shortMovie) => <MovieCard {...e} key={e.id} />)
            :
            <p>Sorry there was a problem with that search please try again.</p>}
        </section>
      </main>
    </div>
  )
}
