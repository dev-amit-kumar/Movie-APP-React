import '../../css/Theme.css'
import colorList from '../../colors.json'
const Theme = () => {
    const changeTheme = (color) => {
        document.body.style.setProperty('--primary', color)
        document.body.style.setProperty('--primary_text', color)
    }
    return(
        <div className="card setting_common_card">
            <h2 className="card-header">Select Theme Color</h2>
            <div className="card-body theme_container">
                {colorList.colors.map((color, idx) => {
                    return (
                        <button key={idx} onClick={() => changeTheme(color)} style={{backgroundColor: color}}></button>
                    )
                })}
            </div>
        </div>
    )
}

export default Theme