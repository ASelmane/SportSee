import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'
import "../styles/css/charts.css";

/**
* A radar chart component of different performance.
* @param {Object} perf
* @external Recharts library
* @see https://recharts.org/en-US/api/RadarChart
* @returns A radar chart React Element.
*/
const chartRadar = (perf) => {
    let { data, kind } = perf.data;

    if (data[0].kind || data.length > 1) {
        
        for (let i = 0; i < data.length; i++) {
            data[i].kind = kind[i + 1].charAt(0).toUpperCase() + kind[i + 1].slice(1);
        }

        return (
            <div className="radar">
                <ResponsiveContainer>
                    <RadarChart margin={{ top: 75}} cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis dataKey="kind" tickLine={false} stroke="#FFFFFF" dy={5} tick={{ fontSize: 12, fontWeight: 500 }} />
                        <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

        )
    }
    else {
        return (
            <div className="radar">
                <p>Pas de données</p>
            </div>
        )
    }
}

chartRadar.propTypes = {
    perf: PropTypes.object,
    data: PropTypes.object,
    kind: PropTypes.array
}

export default chartRadar;