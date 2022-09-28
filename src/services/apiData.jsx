import axios from "axios";

/**
 * Fetch user_data from API
 * @param {Number} id
 * @returns Object
 */
export const dataUser = async (id) => {
    let data = [];
    await axios.get(`http://localhost:3000/user/${id}`)
        .then((response) => (data = response.data.data))
        .catch((error) => console.log(error));
    return data;
};

/**
 * Fetch user_activity from API
 * @param {Number} id
 * @returns Object
 */
export const dataActivity = async (id) => {
    let data = [];
    await axios.get(`http://localhost:3000/user/${id}/activity`)
        .then((response) => (data = response.data.data))
        .catch((error) => console.log(error));
    return data;
};

/**
 * Fetch user_average_sessions from API
 * @param {Number} id
 * @returns Object
 */
export const dataAverage = async (id) => {
    let data = [];
    await axios.get(`http://localhost:3000/user/${id}/average-sessions`)
        .then((response) => (data = response.data.data))
        .catch((error) => console.log(error));
    return data;
};

/**
 * Fetch user_performance from API
 * @param {Number} id
 * @returns Object
 */
export const dataPerf = async (id) => {
    let data = [];
    await axios.get(`http://localhost:3000/user/${id}/performance`)
        .then((response) => (data = response.data.data))
        .catch((error) => console.log(error));
    return data;
};
