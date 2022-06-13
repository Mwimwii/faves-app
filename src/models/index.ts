export interface MovieDBResponse {
    page: number
    results: Movie[]
    total_results: number
    total_pages: number
}

export interface Movie {
    id: number
    title: string
    adult: string
    backdrop_path: string
    genre_ids: number[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
}

export interface MovieState {
    movies: Movie[],
    likedMovies: Movie[]
    load: (movie: Movie[]) => void
    push: (movie: Movie) => void
    pop: (movie: Movie) => void
    flush: () => void
}
