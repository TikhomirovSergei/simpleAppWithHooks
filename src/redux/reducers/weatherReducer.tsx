import { GET_WEATHER_SUCCESS } from "../actionTypes";

import { IWeatherResponse } from "../../interfaces/weatherInfoModel";

type IWweathersModel = {
    current: IWeatherResponse;
};

const initialState: IWweathersModel = {
    current: null as any,
};

export const weather = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_WEATHER_SUCCESS: {
            return {
                ...state,
                current: action.payload,
            };
        }
        default:
            return state;
    }
};
