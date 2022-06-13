import create from 'zustand'
import { MovieState } from '../models'

export const useStore = create<MovieState>(set => ({
        movies: [],
        likedMovies: [],
        load: (movie) => set(state => ({ movies: state.movies.concat(movie), likedMovies: state.likedMovies })),
        push: (movie) => set(state => ({ movies: state.movies, likedMovies: state.likedMovies.concat(movie) })),
        pop: (movie) => set(state => ({ movies: state.movies, likedMovies: state.likedMovies.filter(likedMovie => likedMovie.id !== movie.id) })),
        flush: () => set(state => ({ movies: [], likedMovies: state.likedMovies }))
    })
)