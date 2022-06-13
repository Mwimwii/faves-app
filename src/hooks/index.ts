import React from 'react'
import { useStore } from '../store'
import { MovieDBResponse, Movie } from '../models'

const useMovies = (page: number) => {
    const [movies, setMovies] = React.useState<Movie[]>([])
    const { movies: movieStore, load, flush, likedMovies } = useStore()
    React.useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17&page=${page}`)
            .then(res => res.json())
            .then((data: MovieDBResponse) => setMovies(data.results))
    }, [page])

    React.useEffect(() => {
        if (page === 1) flush()
        load(movies)
    }, [movies])

    return { movies: movieStore, likedMovies }
}

export { useMovies }
