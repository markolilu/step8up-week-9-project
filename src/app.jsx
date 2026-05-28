import React, { useState, useEffect } from 'react';


import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import pages here
import Layout from './components/layout';
import Home from './pages/home';
import Bio from './pages/bio';
import Projects from './pages/projects';


const App = () => {

    return (
        <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="bio" element={<Bio />} />
                        <Route path="projects" element={<Projects />} />
                    </Route>
                </Routes>
        </Router>
    )
};

export default App;