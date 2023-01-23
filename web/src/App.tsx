import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gtrade from './pages/home'
import NoPage from './pages/nopage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Gtrade />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
      </BrowserRouter>
    )
}

export default App