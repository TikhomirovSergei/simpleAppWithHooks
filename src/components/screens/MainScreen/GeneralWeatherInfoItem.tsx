import { getWeatherImage } from "../../../utils/imageHelper";
import CircleView from "../../genenal/CircleView";

import React from "react";
import { Image, Text, View } from "react-native";

import { IDailyModel } from "../../../interfaces/weatherInfoModel";

import { weatherInfoItemStyles } from "../../../styles/generalWeatherInfoItemStyles";

type WeatherInfoItemProps = {
    weather: IDailyModel;
    title: string;
};

const GeneralWeatherInfoItem = (props: WeatherInfoItemProps) => {
    const renderWeatherInfo = (weather: IDailyModel, title: string) => {
        const icon = (weather && weather.weather && weather.weather[0] && weather.weather[0].icon) ?? "";
        const description = (weather && weather.weather && weather.weather[0] && weather.weather[0].description) ?? "";
        const day = (weather && weather.temp && weather.temp.day) ?? 0;
        const night = (weather && weather.temp && weather.temp.night) ?? 0;
        return (
            <View style={weatherInfoItemStyles.view}>
                <Image style={weatherInfoItemStyles.image} source={getWeatherImage(icon)} />
                <Text style={weatherInfoItemStyles.text}>{`${title}: `}</Text>
                <Text style={weatherInfoItemStyles.text}>{description}</Text>
                <Text style={weatherInfoItemStyles.temperatureText}>
                    {Number(day.toFixed(0))}
                    <CircleView color="#ffffff" />
                    {"/"}
                    {Number(night.toFixed(0))}
                    <CircleView color="#ffffff" />
                </Text>
            </View>
        );
    };

    return renderWeatherInfo(props.weather, props.title);
};

export default GeneralWeatherInfoItem;
