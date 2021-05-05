import React from 'react';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import Header from './componentsi/Header';
import "./app.css";


import { SenseiProvider, themeDark as theme } from "react-sensei";
import { WatchListContext, WatchListContextProvider } from './context/watchListContext';





const App = () => {

    return (
        
        <SenseiProvider theme={theme}>
        
            <WatchListContextProvider>
            <BrowserRouter>
            <Header />
            <Route exact path="/" component={CoinSummaryPage} />
            <Route path="/coins/:id" component={CoinDetailPage}/>
            </BrowserRouter>
            </WatchListContextProvider>
            
        
        </SenseiProvider>
        
    )
}

export default App
