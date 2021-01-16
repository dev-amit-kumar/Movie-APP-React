import '../../css/Theme.css'
import colorList from '../../colors.json'
import Zoom from 'react-reveal/Zoom';

const Theme = () => {
    const changeTheme = (color) => {
        document.body.style.setProperty('--primary', color)
        document.body.style.setProperty('--primary_text', color)
    }
    return(
        <Zoom>
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
        </Zoom>
    )
}

export default Theme