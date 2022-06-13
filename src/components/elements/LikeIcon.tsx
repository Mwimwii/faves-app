
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faHeartCircleBolt } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../store';
import { Movie } from '../../models';


const LikeIcon: React.FC<{ size: SizeProp, movie: Movie, active: boolean }> = ({ size, movie, active: isActive }) => {
    const [active, setActive] = React.useState(isActive);
    const { push, pop } = useStore()
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        if (active) {
            setActive(false);
            pop(movie);
            console.log(movie)
        } else {
            setActive(true);
            push(movie);
        }
    }
    return (
        <button onClick={handleClick}>
            <FontAwesomeIcon icon={faHeartCircleBolt} size={size} className={`like__icon ${active ? 'text-red-400' : 'text-slate-500'}`} />
        </button>
    )
}

export default LikeIcon;