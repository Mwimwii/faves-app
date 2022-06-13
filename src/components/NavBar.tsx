import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {
    return (
        <div className='absolute inset-x-0 top-0 bg-slate-50 z-30 w-full h-16 py-2 flex items-center shadow-lg'>
            <div className='relative logo w-1/5'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faClapperboard} size={'2x'} className='pl-3 text-slate-700' />
                        <h1 className='cursor-pointer text-left text-3xl pl-1 text-slate-700 font-bold tracking-tighter'>Faves</h1>
                    </div>
                </Link>
            </div>
            <div className='w-full justify-between items-center hidden sm:flex'>
                <div className='header__links w-1/3 flex items-center'>
                    <Link to='/'>
                        <button className='text-md px-3 font-semibold text-slate-700'>Home</button>
                    </Link>
                    <Link to='/likes'>
                        <button className='text-md px-3  font-semibold text-slate-700'>Likes</button>
                    </Link>
                </div>

                <div className='header__space sm:w-1/6 md:w-1/3 hidden md:block'>
                </div>

                <div className='header__search w-1/3 h-10 flex items-center'>
                    <input type={'text'} className='p-2 bg-gray-200 h-8 rounded' />
                </div>

                <div className='profile__pills sm:w-1/4 lg:w-1/3 hidden justify-evenly items-center md:flex'>
                    <FontAwesomeIcon icon={faUserCircle} size={'2x'} className='text-slate-700 lg:hidden' />
                    <div className='rounded-full w-1/3 px-2 py-1 text-xs font-bold text-center border-2 border-slate-500 hidden lg:block'>Login</div>
                    <div className='rounded-full w-1/3 px-2 py-1 text-xs font-bold text-center text-slate-50 bg-slate-500  hidden lg:block'>SignUp</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;