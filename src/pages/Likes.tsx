import { faSadCry, faSadTear } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { HeaderSelection, MovieCard } from '../components'
import { useStore } from '../store'




const Likes: React.FC = () => {
    const { likedMovies } = useStore()
    return (
        <div className='w-full h-screen overflow-scroll pt-16 z-10 no-scrollbar pb-20 md:pb-0 flex flex-col items-center'>
            <HeaderSelection title='Your Faves' />

            <div className='w-5/6 flex flex-wrap justify-center'>

                {likedMovies && likedMovies.map((movie, movieIndex) => (
                    <div key={`${movie.id}${movieIndex}`} className='card relative w-full sm:w-1/5 p-2'>
                        <MovieCard movie={movie} active={true} />
                    </div>
                ))}

                {likedMovies.length === 0 &&
                    <div className='mt-16 space-y-4 text-slate-300 flex flex-col items center'>
                        <FontAwesomeIcon size={'2x'} icon={faSadCry} />
                        <h3 className='text-xl'> You have no faves saved </h3>
                    </div>
                }
            </div>
        </div>
    )
}

export default Likes