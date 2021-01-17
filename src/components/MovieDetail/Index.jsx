import React from 'react'
import MainPage from './MainPage'

const Index = (props) => {
    return(
        <React.Fragment key={props.match.params.id}>
            <MainPage movie_id={props.match.params.id}/>
        </React.Fragment>
    )
}

export default Index