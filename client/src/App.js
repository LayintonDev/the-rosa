import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom"

import "./styles.css"
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import myScript from './main';

const App = () => {
useEffect(() => {
    myScript()
}, []);
    return (
        <BrowserRouter>
            <Header/>
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
