import create from 'zustand'
import { Movie } from '../models'

interface MovieState {
    likedMovies: Movie[]
    push: (movie: Movie) => void
    pop: (movie: Movie) => void
}

export const useStore = create<MovieState>(set => ({
        likedMovies: [],
        push: (movie) => set(state => ({ likedMovies: state.likedMovies.concat(movie) })),
        pop: (movie) => set(state => ({ likedMovies: state.likedMovies.filter(likedMovie => likedMovie !== movie) })),
    })
)
