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
    const [isLoadingImage, setIsLoadingImage] = React.useState(true);
    const { push } = useStore()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
        console.log('You have liked', movie.title);
        push(movie)
    }
    return (
        <div className=' shadow-lg mt-4 mx-3 rounded-md bg-gray-100'>

            {isLoadingImage && <div style={{ maxHeight: '200px', height: '200px' }} className="w-1/4 sm:w-full rounded-tl-lg sm:rounded-t-lg bg-slate-500 animate-pulse"></div>}
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className={`w-1/4 sm:w-full rounded-tl-lg sm:rounded-t-lg ${isLoadingImage && 'hidden'}`} onLoad={() => setIsLoadingImage(false)} />

            <div className="w-1/4 sm:w-full rounded-bl-md sm:rounded-b-md bg-neutral-300">
                {!isLoading ? <button className="p-2 w-full text-center font-light" onClick={handleClick}>Like</button>
                    : <button className="rounded-bl-md sm:rounded-b-md p-2 w-full text-center font-light bg-neutral-400 cursor-default">Loading...</button>}
            </div>
        </div>
    )
}

export default MovieCard;