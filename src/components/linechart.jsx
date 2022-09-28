import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/css/charts.css";
import PropType from "prop-types";

/**
* A average sessions line chart component.
* @param {Object} average
* @external Recharts library
* @see https://recharts.org/en-US/api/LineChart 
* @returns A line chart React Element.
*/
const chartLine = (average) => {
    let { sessions } = average.data;
    const day = ["L", "M", "M", "J", "V", "S", "D"];
    if (sessions && sessions.length > 0) {
        for (let i = 0; i < sessions.length; i++) {
            sessions[i].day = day[i];
        }

        return (
            <div className="line">
                <div className='chart-header'>
                    <h2>Durée moyenne des sessions</h2>
                </div>
                <ResponsiveContainer width="100%">
                    <LineChart data={sessions}
                        margin={{ top: 50, right: 0, left: 5, bottom: 5 }}>
                        <XAxis padding={{ left: 20, right: 20 }} dataKey="day" axisLine={false} tickLine={false} stroke="#ffffff" />
                        <YAxis hide domain={['dataMin - 2', 'dataMax + 5']} />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                        <Line type="monotone" dataKey="sessionLength" stroke="#ffffff" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }
    else {
        return (
            <div className="line">
                <div className='chart-header'>
                    <h2>Durée moyenne des sessions</h2>
                </div>
                <p className="no-data">Pas de données</p>
            </div>
        );
    }
}

/**
 * Custom tooltip for the chart.
 * @param {Boolean} active
 * @param {Array} payload
 * @returns A custom tooltip React Element.
 */
const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className="tooltips">
                <p className="label">{`${payload[0].value}min`}</p>
            </div>
        );
    }
    return null;
};

chartLine.propTypes = {
    average: PropType.object,
    sessions: PropType.array
}

CustomTooltip.propTypes = {
    active: PropType.bool,
    payload: PropType.array
}

export default chartLine;