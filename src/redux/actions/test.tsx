import { openweathermapApi } from "../../assets/apiKey";
import { IWeatherInfoModel } from "../../interfaces/weatherInfoModel";

export const changeCounter = () => ({
    type: "CHANGE_COUNTER",
});

export function getWeather() {
    return function action(dispatch: Function) {
        getWeatherAPI("466806")
            .then((data: IWeatherInfoModel) => {
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
