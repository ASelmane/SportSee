import axios from "axios";

/**
 * Fetch user_data from API
 * @param {Number} id
 * @returns Object
 */
export const dataUser = async (id) => {
    let data = {};
    await axios.get(`http://localhost:3000/user/${id}`)
        .then((response) => {
            const res = response.data.data;
            data = {
                userInfos: {
                    firstName: res.userInfos.firstName ? res.userInfos.firstName : "",
                    lastName: res.userInfos.lastName ? res.userInfos.lastName : "",
                    age: res.userInfos.age ? res.userInfos.age : 0,
                },
                score: (res.todayScore) ? res.todayScore : (res.score ? res.score : 0),
                keyData: {
                    calorieCount: res.keyData.calorieCount ? res.keyData.calorieCount : 0,
                    proteinCount: res.keyData.proteinCount ? res.keyData.proteinCount : 0,
                    carbohydrateCount: res.keyData.carbohydrateCount ? res.keyData.carbohydrateCount : 0,
                    lipidCount: res.keyData.lipidCount ? res.keyData.lipidCount : 0,
                }
            }
        })
        .catch((error) => console.log(error));
    return data;
};

/**
 * Fetch user_activity from API
 * @param {Number} id
 * @returns Object
 */
export const dataActivity = async (id) => {
    let data = { sessions: [] };
    await axios.get(`http://localhost:3000/user/${id}/activity`)
        .then((response) => {
            if (response.data.data.sessions.length > 0) {
                response.data.data.sessions.forEach((session) => {
                    if (session.day && session.day.length === 10) {
                        data.sessions.push({
                            day: session.day,
                            kilogram: session.kilogram ? session.kilogram : 0,
                            calories: session.calories ? session.calories : 0
                        });
                    }
                })
            }
        })
        .catch((error) => {
            console.log(error);
            data.sessions = [
                { day: "", kilogram: 0, calories: 0 }
            ];
        });
    return data;
};

/**
 * Fetch user_average_sessions from API
 * @param {Number} id
 * @returns Object
 */
export const dataAverage = async (id) => {
    let data = { sessions: [] };
    await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then((response) => {
            if (response.data.data.sessions.length > 0) {
                response.data.data.sessions.forEach((session) => {
                    if (session.day && session.day !== 0) {
                        data.sessions.push({
                            day: session.day,
                            sessionLength: session.sessionLength ? session.sessionLength : 0
                        });
                    }
                })
            }
        })
        .catch((error) => {
            console.log(error)
            data.sessions = [
                { day: "", sessionLength: 0 }
            ];
        });
    return data;
};

/**
 * Fetch user_performance from API
 * @param {Number} id
 * @returns Object
 */
export const dataPerf = async (id) => {
    let data = {kind: {}, data: []};
    await axios.get(`http://localhost:3000/user/${id}/performance`)
        .then((response) => {
            if (response.data.data.data.length > 0) {
                response.data.data.data.forEach((val) => {
                    if (val.kind) {
                        data.data.push({
                            value: val.value ? val.value : 0,
                            kind: val.kind,
                        });
                        data.kind = response.data.data.kind;
                    }
                });
            }
        })
        .catch((error) => {
            console.log(error);
            data.data = [
                {value: 0, kind: 0}
            ];
        });
    return data;
};
