import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home/Index';
import MovieDetail from './MovieDetail/Index'
import PersonDetail from './PersonDetail/Index';
import Header from './Header';
import Footer from './Footer';
import SearchPage from "./Search/SearchPage";

class Routing extends React.Component{
    constructor(){
        super()
        this.state={
            searchData:[]
        }
    }
    saveState=(data)=>{
        this.setState({searchData:data})
    }
    render(){
        console.log(this.state.searchData,"coss")
        return(
            <BrowserRouter>
                <Header SearchData={(data)=>this.saveState(data)}/>
                <Route exact path="/" component={()=><Home SearchList={this.state.searchData}/>}/>
                <Route exact path="/movie/:id" component={MovieDetail}/>
                <Route exact path="/person/:id" component={PersonDetail}/>
                <Route path="/search/:str" component={SearchPage}/>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Routing;