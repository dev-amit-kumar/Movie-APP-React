import React, {useState} from 'react'

const Year=(props)=>{ 
    const [year, changeYear] = useState('')

    const sendData=(e)=>{
        changeYear(e.target.value)
        props.YearData(e.target.value)
    }

    return (
        <div>
            <h6>Select Year</h6>
            <input className="form-control" onChange={sendData} type="number" minLength="4" maxLength="4" min="1900" max="2099" step="1" value={year}/>
        </div>
    )   
}

export default Year;