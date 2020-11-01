import { openweathermapApi } from "../../private/apiKey";
import { GET_WEATHER_SUCCESS } from "../actionTypes";

import { IWeatherResponse } from "../../interfaces/weatherInfoModel";

export function getWeather(callback: Function) {
    return async function action(dispatch: Function) {
        try {
            const data: IWeatherResponse = await getWeatherAPI(47.890781, 56.638771);
            data.hourly = data.hourly.slice(24);
            dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
            callback();
        } catch (e) {
            console.log(e && e.message);
            callback();
        }
    };
}

const getWeatherAPI = async (lon: number, lat: number): Promise<IWeatherResponse> => {
    const url = "https://api.openweathermap.org/data/2.5/onecall";
    return fetch(`${url}?lat=${lat}&lon=${lon}&exclude=minutely&appid=${openweathermapApi}&units=metric&lang=ru`)
        .then((resp) => resp.json())
        .then((data: IWeatherResponse) => data);
};
