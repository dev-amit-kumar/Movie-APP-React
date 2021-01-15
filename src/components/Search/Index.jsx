import React from 'react'
import SearchPage from './SearchPage'
const Index = (props) => {
    return(
        <React.Fragment key={props.match.params.str}>
            <SearchPage/>
        </React.Fragment>
    )
}
export default Index