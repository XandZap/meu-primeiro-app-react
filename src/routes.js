import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets';
import PlanetScreen from './screens/planet';

const RoutesApp = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PlanetsScreen/>}/>
                <Route path='/planet' element={<PlanetScreen/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp