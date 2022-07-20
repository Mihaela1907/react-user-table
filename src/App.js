import React from "react";
import { BrowserRouter } from 'react-router-dom';

import { Routing } from './routing';

import './styles/main.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Routing />
        </BrowserRouter>
    )
}

export default App;