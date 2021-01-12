const SortByYear=(props)=>{ 
    const sendData=(e)=>{
        props.Year(e.target.value)
    }
    return (
        <div>
            <h6>year</h6>
            <input onChange={sendData} type="text"/>
        </div>
    )
    
}

export default SortByYear;
