import '../styles/css/Profil.css';
import ChartBar from '../components/barchart';
import ChartLine from '../components/linechart';
import ChartRadar from '../components/radarchart';
import ChartRadial from '../components/radialchart';
import Counter from '../components/counter';
import React from "react";
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import {
    dataUser,
    dataActivity,
    dataAverage,
    dataPerf,
} from '../services/apiData'

/**
* The profil Page.
* @returns A profil React Element.
*/
const Profil = () => {
    const { id } = useParams();
    const [user, setUser] = React.useState({ userInfos: { firstName: "", lastName: "", age: "" }, score: 0, keyData: { calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0 } });
    const [activity, SetActivity] = React.useState({ sessions: [{ day: "", kilogram: 0, calories: 0 }] });
    const [perf, SetPerf] = React.useState({ data: [{ value: 0, kind: 0}], kind: {} });
    const [average, setAverage] = React.useState({ sessions : [{ day: "", sessionLength: 0 }] });


    /**
    * Store the data from the API in the state.
    * @param {Number} id
    */
    const getAllData = async (id) => {
        const responseUser = await dataUser(id);
        setUser(user => ({ ...user, ...responseUser }));
        const responseActivity = await dataActivity(id)
        SetActivity(activity => ({...activity, ...responseActivity }));
        const responseAverageSession = await dataAverage(id)
        setAverage(average => ({...average, ...responseAverageSession }));
        const responsePerformance = await dataPerf(id)
        SetPerf(perf => ({...perf, ...responsePerformance }));
    }
    getAllData.propTypes = {
        id: PropTypes.number
    }

    React.useEffect(() => {
        getAllData(id);
    }, [id])

    return (
        <section className='profil'>
            <h1>Bonjour <span>{user.userInfos.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='content'>
                <div className='left-div'>
                    <ChartBar data={activity} />
                    <div className='small-chart'>
                        <ChartLine data={average} />
                        <ChartRadar data={perf} />
                        <ChartRadial data={user.score} />
                    </div>
                </div>
                <div className='right-div'>
                    <Counter types="Calories" value={user.keyData.calorieCount} />
                    <Counter types="Proteines" value={user.keyData.proteinCount} />
                    <Counter types="Glucides" value={user.keyData.carbohydrateCount} />
                    <Counter types="Lipides" value={user.keyData.lipidCount} />
                </div>
            </div>
        </section>
    );

}

export default Profil;