import React, {useState} from 'react'

const Rating=(props)=>{
    const [rating, changeRating] = useState('')

    const sendRate=(e)=>{
        changeRating(e.target.value)
        props.RatingData(e.target.value)
    }
    
    return(
        <div>
            <h6>Select Rating</h6>
            <select className="form-control" onChange={sendRate} value={rating}>
                <option value="">Choose Rating</option>
                <option value="1">More than 1</option>
                <option value="2">More than 2</option>
                <option value="3">More than 3</option>
                <option value="4">More than 4</option>
                <option value="5">More than 5</option>
                <option value="6">More than 6</option>
                <option value="7">More than 7</option>
                <option value="8">More than 8</option>
                <option value="9">More than 9</option>
                <option value="10">More than 10</option>
            </select>
        </div>
    )
}
export default Rating;