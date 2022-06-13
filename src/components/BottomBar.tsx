import React from 'react'
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons'
import { BottomBarIcon } from './'




const BottomBar: React.FC = () => {
    return (
        <div className='absolute inset-x-0 bottom-0 w-full z-30 sm:hidden'>
            <div className='h-16 w-full flex  justify-evenly items-center bg-slate-50'>
                <BottomBarIcon path={'/'} icon={faHome} />
                <BottomBarIcon path={'/likes'} icon={faHeart} />
            </div>
        </div>
    )
}

export default BottomBar;