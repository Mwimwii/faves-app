import React from 'react'
import { HeaderSelection, MovieCard } from '../components'
import { useMovies } from '../hooks'
const Home: React.FC = () => {
    const [page, setPage] = React.useState(1)
    const { movies, likedMovies } = useMovies(page)
    return (
        <div className='w-full h-screen overflow-scroll pt-16 z-10 no-scrollbar pb-20 md:pb-0 flex flex-col items-center'>
            <HeaderSelection title='Top Movies' />
            <div className='w-5/6 flex flex-wrap justify-center'>
                {movies && movies.map((movie, movieIndex) => (
                    <div className='card relative w-full sm:w-1/5 p-2'>
                        {
                            likedMovies.find(likedMovie => likedMovie.id === movie.id) ?
                            <>
                                <div className='pos__item z-30 top-3 left-4 w-5 h-5 text-blue-200 rounded-full absolute text-xs text-center items-center justify-center bg-red-500 hidden sm:flex'>{movieIndex + 1}</div>
                                <MovieCard key={`${movie.id}${movieIndex}`} movie={movie} active={true} /> 
                            </>
                                :
                            <>
                                <div className='pos__item z-30 top-3 left-4 w-5 h-5 text-blue-200 rounded-full absolute text-xs text-center items-center justify-center bg-slate-600 hidden sm:flex'>{movieIndex + 1}</div>
                                <MovieCard key={`${movie.id}${movieIndex}`} movie={movie} active={false} />
                                </>
                        }
                    </div>
                ))}

                {movies.length !== 0 && <button className='w-full p-2 bg-slate-600 text-slate-100 font-bold mb-1 sm:mb-4 rounded' onClick={() => { setPage(page + 1) }}> Load More </button>}
            </div>
        </div>
    )
}

export default Home;