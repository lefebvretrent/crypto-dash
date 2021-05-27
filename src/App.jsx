import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';

import Navbar from './componentsi/navbar/Navbar'
import "./app.css";

import FullListPage from './pages/FullListPage';
import UpdatesPage from './pages/UpdatesPage';


import { SenseiProvider, themeDark as theme } from "react-sensei";
import {  WatchListContextProvider } from './context/watchListContext';
import NewsPage from './pages/NewsPage';





const App = () => {

    return (
        
        <SenseiProvider theme={theme}>
        
            <WatchListContextProvider>
            
            <BrowserRouter>
            
            
            <Navbar />
            
           
            <Route exact path="/" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage}/>
            <Route path="/list" component={FullListPage}/>
            <Route path="/updates" component={UpdatesPage} />
            <Route path="/news" component={NewsPage}/>
            </BrowserRouter>
            </WatchListContextProvider>
            
        
        </SenseiProvider>
        
    )
}

export default App
