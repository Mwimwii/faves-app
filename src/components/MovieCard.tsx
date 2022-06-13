import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Movie } from '../models';
import { LikeIcon } from './';

const MovieCard: React.FC<{ movie: Movie, active: boolean }> = ({ movie, active }) => {
    const [isLoadingImage, setIsLoadingImage] = React.useState(true);
    return (
        <div className='movie__card relative shadow-lg mt-4 mx-3 rounded-xl bg-gray-200 sm:p-2 z-0'>
            <div className='relative movie__card__image overflow-hidden flex'>
                <div className='like__button absolute bottom-0 sm:bottom-auto sm:top-0 right-0 rounded-br-lg sm:rounded-tr-sm sm:rounded-b-none w-1/4 sm:w-full py-1 hidden sm:block bg-slate-200'>
                    <div className='flex flex-col justify-center items-center'>
                        <LikeIcon size={'1x'} movie={movie} active={active} />
                    </div>
                </div>
                <div className='like__button absolute right-0 text-sm font-extralight px-2 py-2 rounded-full border-2 bg-yellow-300 hidden sm:block'>
                        {movie.vote_average}
                </div>
                {isLoadingImage &&
                    <div className=''>
                        <div className='relative w-1/4 sm:w-11/12 h-full'>
                            <FontAwesomeIcon icon={faSpinner} speed={10} spin size={'1x'} className='text-white absolute top-1/2 left-1/2' />
                        </div>
                        <svg className='animate-pulse w-1/4 sm:w-full h-full rounded-l-lg sm:rounded-lg' viewBox='0 0 350 525' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M0 0H350V525H0V0Z' fill='#2F3F3F' />
                        </svg>
                    </div>
                }
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className={`w-1/4 sm:w-full rounded-l-lg sm:rounded-lg ${isLoadingImage ? 'hidden' : 'fadeIn'}`} onLoad={() => setIsLoadingImage(false)} />
                <div className='movie__details sm:hidden w-3/4 flex flex-col justify-between'>
                    <div className='flex justify-between items-start px-2 pt-2'>
                        <h3 className='text-sm font-extralight'>{movie.title} <span className='text-xs italic font-extralight text-slate-400'>({new Date(movie.release_date).getFullYear()})</span></h3>
                        <div className='flex flex-col items-center'>
                        <LikeIcon size={'1x'} movie={movie} active={active}/>
                        <p className='text-xs tracking-tighter font-extralight px-2 py-1 rounded-full border-2'>{movie.popularity.toFixed()}</p> 
                         
                        </div>
                    </div>
                    <div className=' flex justify-start items-center px-2 pb-3'>
                        <p className='text-sm font-extralight px-2 py-2 rounded-full border-2 bg-yellow-300'>{movie.vote_average}</p>
                    </div>

                </div>
                <div className='tabs absolute bottom-0 w-1/4 sm:w-full rounded-bl-md sm:rounded-b-md bg-neutral-200'>
                    <div className='rounded-bl-md sm:rounded-b-md p-2 w-full text-center font-light cursor-default hidden sm:block'>{movie.title} <span className='italic font-extralight text-slate-400'>({new Date(movie.release_date).getFullYear()})</span></div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;