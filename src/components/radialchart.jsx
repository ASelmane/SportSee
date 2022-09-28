import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'
import "../styles/css/charts.css";

/**
* A radial chart component of user score.
* @param {Number} data
* @external Recharts library
* @see https://recharts.org/en-US/api/RadialBarChart
* @returns A radial chart React Element.
*/
const chartRadial = ({data}) => {
    const dataRadial = [
        {
            score: data
        }
    ];
    
    return (
        <div className="radial">
            <div className='chart-header'>
                <h2>Score</h2>
            </div>
            <ResponsiveContainer width="100%" height={230} >
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="85%"
                    data={dataRadial}
                    startAngle={180}
                    endAngle={-180}
                >
                    <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                    <RadialBar fill="#FF0000" background={{ fill: "#FBFBFB" }} clockWise dataKey="score" cornerRadius="50%" />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="legend">
                <h3>{dataRadial[0].score * 100}%</h3>
                <p>de votre <br /> objectif</p>
            </div>
        </div>

    );
}

chartRadial.propTypes = {
    data: PropTypes.number
}

export default chartRadial;