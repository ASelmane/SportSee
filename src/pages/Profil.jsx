import '../styles/css/Profil.css';
import ChartBar from '../components/barchart';
import ChartLine from '../components/linechart';
import ChartRadar from '../components/radarchart';
import ChartRadial from '../components/radialchart';
import Counter from '../components/counter';
import React from "react";
import { useParams } from 'react-router-dom';
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
    const [user, setUser] = React.useState([]);
    const [activity, SetActivity] = React.useState([]);
    const [perf, SetPerf] = React.useState([]);
    const [average, setAverage] = React.useState([]);


    /**
    * Store the data from the API in the state.
    * @param {Number} id
    */
    const getFullDataFormat = async (id) => {
        const responseUser = await dataUser(id);
        setUser(responseUser);
        const responseActivity = await dataActivity(id)
        SetActivity(responseActivity)
        const responseAverageSession = await dataAverage(id)
        setAverage(responseAverageSession)
        const responsePerformance = await dataPerf(id)
        SetPerf(responsePerformance)
    }

    
    React.useEffect(() => {
        getFullDataFormat(id);
    }, [id])


    return (
        <section className='profil'>
            <h1>Bonjour <span>{user.userInfos ? user.userInfos.firstName : ""}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            <div className='content'>
                <div className='left-div'>
                    <ChartBar data={activity} />
                    <div className='small-chart'>
                        <ChartLine data={average} />
                        <ChartRadar data={perf} />
                        <ChartRadial data={user.score ? user.score : (user.todayScore ? user.todayScore : 0)} />
                    </div>
                </div>
                <div className='right-div'>
                    <Counter types="Calories" value={user.keyData ? user.keyData.calorieCount : 0} />
                    <Counter types="Proteines" value={user.keyData ? user.keyData.proteinCount : 0} />
                    <Counter types="Glucides" value={user.keyData ? user.keyData.carbohydrateCount : 0} />
                    <Counter types="Lipides" value={user.keyData ? user.keyData.lipidCount : 0} />
                </div>
            </div>
        </section>
    );
}

export default Profil;