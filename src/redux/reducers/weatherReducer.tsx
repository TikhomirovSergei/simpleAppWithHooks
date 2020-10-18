import { GET_WEATHER_SUCCESS } from "../actionTypes";

import { IWeatherInfoModel } from "../../interfaces/weatherInfoModel";

type IWweathersModel = {
    current: IWeatherInfoModel;
    weather: IWeatherInfoModel[];
};

const initialState: IWweathersModel = {
    current: {
        weather: [],
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
        },
        visibility: 0,
        wind: {
            speed: 0,
            deg: 0,
        },
        clouds: {
            all: 0,
        },
        dt: 0,
        sys: {
            type: 0,
            id: 0,
            message: 0,
            country: "",
            sunrise: 0,
            sunset: 0,
        },
        timezone: 0,
        id: 0,
        name: "",
    },
    weather: [],
};

function addWeather(state: IWeatherInfoModel[], payload: IWeatherInfoModel) {
    const isExist = state.some((weather) => weather.id === weather.id);

    let newState: IWeatherInfoModel[] = [];
    if (isExist) {
        newState = state.map((weather) => (weather.id === payload.id ? payload : weather));
    } else {
        newState = state;
        newState.push(payload);
    }

    return newState;
}

export const weather = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS: {
            return {
                ...state,
                weather: addWeather(state.weather, action.payload),
                current: action.payload,
            };
        }
        default:
            return state;
    }
};
