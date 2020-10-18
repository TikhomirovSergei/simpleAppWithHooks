import { openweathermapApi } from "../../private/apiKey";
import { GET_WEATHER_SUCCESS } from "../actionTypes";

import { IWeatherInfoModel } from "../../interfaces/weatherInfoModel";

export function getWeather() {
    return function action(dispatch: Function) {
        getWeatherAPI("466806")
            .then((data: IWeatherInfoModel) => {
                dispatch({ type: GET_WEATHER_SUCCESS, payload: data });
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
}

const getWeatherAPI = (cityID: string): Promise<IWeatherInfoModel> => {
    return new Promise((resolve, reject) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityID}&lang=ru&appid=${openweathermapApi}`)
            .then((resp) => resp.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
    });
};
