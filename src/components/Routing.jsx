import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home/Index';
import MovieDetail from './MovieDetail/Index'
import PersonDetail from './PersonDetail/Index';
import Header from './Common/Header';
import Footer from './Common/Footer';
import SearchPage from "./Search/Index";
import Setting from './Setting/Index'
import ForgetPassword from './Auth/ForgetPassword'
import Login from './Auth/Login'
import SignUp from './Auth/Signup'
import Logout from './Auth/Logout'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:id" component={MovieDetail} />
            <Route exact path="/person/:id" component={PersonDetail} />
            <Route path="/search/:str" component={SearchPage} />
            <Route exact path="/setting/:type" component={Setting} />
            <Route exact path="/auth/logout" component={Logout} />
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/signup" component={SignUp} />
            <Route exact path="/auth/forget-password" component={ForgetPassword} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;