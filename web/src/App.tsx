import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GMDstats from './pages/GMDstats'
import Gtrade from './pages/gTrade'
import NoPage from './pages/nopage';
import DefaultPage from './pages/defaultPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />} />
                <Route index element={<DefaultPage />} />
                <Route path="blogs" element={<GMDstats />} />
                <Route path="contact" element={<Gtrade />} />
                <Route path="*" element={<NoPage />} />

            </Routes>
      </BrowserRouter>
    )
}

export default App