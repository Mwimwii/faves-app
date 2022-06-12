import React from 'react';
import { Movie } from '../models';
import { useStore } from '../store'

const Spinner: React.FC<{ size: number; color: string; colorSize: number }> = ({ size, color, colorSize }) => {
    return (
        <div style={{ borderTopColor: 'transparent' }}
            className={`w-${size} h-${size} border-2 border-${color}-${colorSize} rounded-full animate-spin`}>
        </div>
    )
}
const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const { push } = useStore()
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
        console.log('You have liked',movie.title);
        push(movie)
    }
    return (
        <div className=' shadow-lg mt-4 mx-3 rounded-md bg-gray-100'>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className='w-1/4 sm:w-full rounded-tl-lg sm:rounded-t-lg' />
            <div className="w-1/4 sm:w-full flex justify-evenly rounded-bl-md sm:rounded-b-md bg-neutral-300">
                {!isLoading ? <button className="p-2 font-light" onClick={handleClick}>Like</button>
                    : <p className="p-2 font-light">Loading...</p>}
                </div>
        </div>
    )
}

export default MovieCard;