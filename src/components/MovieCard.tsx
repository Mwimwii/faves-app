import React from "react";
import { Movie } from "../models";

const Spinner: React.FC<{ size: number; color: string; colorSize: number }> = ({ size, color, colorSize }) => {
    return (
        <div style={{ borderTopColor: 'transparent' }}
            className={`w-${size} h-${size} border-2 border-${color}-${colorSize} rounded-full animate-spin`}>
        </div>
    )
}
const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 300);
        console.log('You have liked',movie.title);
    }
    return (
        <div className='px-2 pb-4 shadow-lg mt-4 mx-3 rounded-md bg-gray-100'>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} className='rounded-lg pt-2' />
            <div className="flex justify-evenly rounded-md bg-neutral-300 mt-2 space-x-4">
                {!isLoading ? <button className="p-2 font-light" onClick={handleClick}>Like</button>
                    : <p className="p-2 font-light">Loading...</p>}
                </div>
        </div>
    )
}

export default MovieCard;