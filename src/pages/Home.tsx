import React from 'react'
import { MovieDBResponse, Movie } from '../models'
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
            <div className="flex flex-wrap">
                {movies && movies.map(movie => (
                    <div className="w-full sm:w-1/4 p-2 sm:p-2">
                        <MovieCard key={movie.id} movie={movie} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home;