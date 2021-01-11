import React, { Component } from 'react'

class GenreFilter extends Component {
    constructor(){
        super()
        this.state={
            genre:""
        }
    }
    genreSelect=(e)=>{
        let newData=[]
        if(e){
            return this.props.MovieList.map((val)=>{
                if(val.genre_ids.includes(16)){
                   newData.push(val)
                   this.props.RecieveData(newData)
                }
            })
        }
        
    }
    render() {
        return (
            <div>
                <h6>GENRE</h6>
                <button onClick={this.genreSelect} className="btn btn-light" value="28">Action</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="12">Adventure</button>
                <button onClick={this.genreSelect}className="btn btn-light" value="16">Animation</button>
                <button onClick={this.genreSelect}className="btn btn-light" value="35">comedy</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="80">Crime</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="99">Documentary</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="10751">Family</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="14">Fantasy</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="36">History</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="27">Horror</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="10402">Musicr</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="9648">Mystery</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="10749">Romance</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="878">Science Fiction</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="53">Thriller</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="10752">War</button>
                <button onClick={this.genreSelect} className="btn btn-light" value="37">Western</button>
            </div>
        )
    }
}

export default GenreFilter;
