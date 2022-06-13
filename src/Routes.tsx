import React from 'react'
import { Routes as Switch, Route  } from 'react-router-dom';
import { Home, Likes } from './pages';

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route index element={<Home />} />
                <Route element={<Likes /> } path="likes"/>
            </Switch>
        </>
    )}

    export default Routes