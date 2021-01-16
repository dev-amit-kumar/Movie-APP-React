import React, {useState} from 'react'

const Rating=(props)=>{
    const [rating, changeRating] = useState('')

    const sendRate=(e)=>{
        changeRating(e.target.value)
        props.RatingData(e.target.value)
    }
    
    return(
        <div>
            <h6>Select min. rating</h6>
            <select className="form-control" onChange={sendRate} value={rating}>
                <option value="">Choose Rating</option>
                <option value="2">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
                <option value="4">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
                <option value="6">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
                <option value="8">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
                <option value="10">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
            </select>
        </div>
    )
}
export default Rating;