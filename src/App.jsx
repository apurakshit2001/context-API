import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './ROuting HW/Navigation';
import ControlPanel from './ROuting HW/ControlPanel';

const App = () => {
    return (
        <>
            <Navigation />
          {/* <Router>
            <Routes>
                <Route path="/dashboard" element={<ControlPanel />} />
            </Routes>
          </Router> */}
        </>
    );
};

export default App;
