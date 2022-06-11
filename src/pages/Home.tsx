import React from 'react'
import {MovieDBResponse, Movie} from '../models'
import { MovieCard } from '../components'

const useMovies = () => {
    const [movies, setMovies] = React.useState<Movie[]>([])
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&page=${1}`)
            .then(res => res.json())
            .then((data: MovieDBResponse) => setMovies(data.results))
    }, [])
    return { movies }
}


const Home: React.FC = () => {
    const { movies } = useMovies()
    return (
        <>
            <div className="grid grid-cols-6 gap-0">
                {movies && movies.map(movie => (
                   <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    )
}

export default Home;