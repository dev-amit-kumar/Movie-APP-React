import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Index';
import MovieDetail from './MovieDetail/Index'
import PersonDetail from './PersonDetail/Index';
import Header from './Common/Header';
import Footer from './Common/Footer';
import SearchPage from "./Search/Index";
import Setting from './Setting/Index'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/movie/:id" component={MovieDetail}/>
            <Route exact path="/person/:id" component={PersonDetail}/>
            <Route path="/search/:str" component={SearchPage}/>
            <Route exact path="/setting/:type" component={Setting}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;