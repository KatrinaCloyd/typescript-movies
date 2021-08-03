import { shortMovie } from '../pages/api/movies'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function MovieCard(movie: shortMovie) {
    return (
        <div key={movie.id} className={styles.card}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <Image
                src={movie.img}
                alt="movie poster"
                width={200}
                height={300}
            />
        </div>
    )
}
