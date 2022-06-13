import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, Link } from 'react-router-dom';

const BottomBarIcon: React.FC<{ path: string; icon: IconDefinition }> = ({ path, icon }) => {
    const [active, setActive] = React.useState(false)
    const location = useLocation()
    const isActive = location.pathname === path
    React.useEffect(() => {
        setActive(isActive)
    }
        , [isActive, path])

    return (
        <Link to={path}>
            <FontAwesomeIcon icon={icon} size={'2x'} className={`icon ${active ? 'text-blue-300' : 'text-slate-500'}`} />
        </Link>
    )
}

export default BottomBarIcon