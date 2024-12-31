import React from 'react';
import ReactDOM from 'react-dom';
// import MarketingApp from './components/MarketingApp'
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            {/* <MarketingApp /> */}
        </div>
    </BrowserRouter>
    , document.getElementById("root"))