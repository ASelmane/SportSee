import Calories from '../assets/icones/Calories.svg';
import Proteines from '../assets/icones/Proteines.svg';
import Glucides from '../assets/icones/Glucides.svg';
import Lipides from '../assets/icones/Lipides.svg';
import "../styles/css/counter.css";
import PropTypes from 'prop-types'

/**
* A counter component for calories, proteines, glucides and lipides.
* @param {String} types
* @param {Number} value
* @returns A counter React Element.
*/
const Counter = ({ types, value }) => {
    let icon = "";
    
    switch (types) {
        case "Calories":
            icon = Calories;
            break;
        case "Proteines":
            icon = Proteines;
            break;
        case "Glucides":
            icon = Glucides;
            break;
        case "Lipides":
            icon = Lipides;
            break;
        default:
            icon = "";
    }
    return (
        <div className="counter">
            <img className='type' src={icon} alt={types} />
            <div className="value">
                <h3>{value}{(types === "Calories") ? "kCal" : "g"}</h3>
                <p>{types}</p>
            </div>
        </div>
    );
}

Counter.propTypes = {
    types: PropTypes.string,
    value: PropTypes.number
}

export default Counter;