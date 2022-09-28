import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../styles/css/barchart.css";


/**
* A daily activity bar chart component.
* @param {Object} activity
* @external Recharts library
* @see https://recharts.org/en-US/api/BarChart
* @returns A bar chart React Element.
*/
const ChartBar = (activity) => {
    let { sessions } = activity.data;
    if (sessions && sessions.length > 0) {
        sessions.forEach(days => {
            days.day = days.day.slice(-2);
        });

        return (
            <div className='barchart'>
                <div className='chart-header'>
                    <h2>Activité quotidienne</h2>
                    <div className="legend">
                        <div className="legend-item">
                            <div className="legend-color gray"></div>
                            <p>Poids (kg)</p>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color red"></div>
                            <p>Calories brûlées (kCal)</p>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        width={230}
                        height={240}
                        data={sessions}
                        margin={{
                            top: 50,
                            bottom: 30,
                        }}
                    >
                        <CartesianGrid vertical={0} strokeDasharray="2 2" />
                        <XAxis dataKey="day" tickMargin={20} tickLine={0} tick={{ fill: "#74798c" }} />
                        <YAxis orientation="right" dataKey="kilogram" domain={['dataMin - 1', 'dataMax + 1']} interval="number" tickCount={4} allowDecimals={0} tickMargin={20} axisLine={0} tickLine={0} />
                        <YAxis hide yAxisId="left" orientation="left" dataKey="calories" />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                        <Bar barSize={7} className='kg' dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                        <Bar yAxisId="left" barSize={7} className='cal' dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
    else {
        return (
            <div className="barchart">
                <div className='chart-header'>
                    <h2>Activité quotidienne</h2>
                </div>
                <p className="no-data">Pas de données</p>
            </div>
        )
    }
}


/**
* Custom tooltip for the chart.
* @param {Boolean} {active
* @param {Array} payload}
* @returns A custom tooltip React Element.
*/
const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className="tooltip">
                <p className="label">{`${payload[0].value}kg`}</p>
                <p className="label">{`${payload[1].value}Kcal`}</p>
            </div>
        );
    }
    return null;
};

export default ChartBar;
