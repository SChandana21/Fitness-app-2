import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Stateprovider } from './context/Stateprovider';
import { initialstate } from './context/initialstate';
import reducer from './context/reducer';

ReactDOM.render(
    <Router>
        <Stateprovider initialstate={initialstate} reducer={reducer}>
    <App/>
        </Stateprovider>

    </Router>
    
    , document.getElementById("root"));