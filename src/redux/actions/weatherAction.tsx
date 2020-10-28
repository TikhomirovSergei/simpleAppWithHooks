import { openweathermapApi } from "../../private/apiKey";
import { GET_WEATHER_SUCCESS } from "../actionTypes";

import { IWeatherResponse } from "../../interfaces/weatherInfoModel";

export function getWeather(callback: Function) {
    return async function action(dispatch: Function) {
        getWeatherAPI(47.890781, 56.638771)
            .then((data: IWeatherResponse) => {
                dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
                callback();
            })
            .catch((err) => {
                callback();
                console.log(err);
            });
    };
}

const getWeatherAPI = (lon: number, lat: number): Promise<IWeatherResponse> => {
    return new Promise((resolve, reject) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${openweathermapApi}&units=metric&lang=ru`,
        )
            .then((resp) => resp.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
};
