import React from "react";
import { Image, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { IDailyModel } from "../../../interfaces/weatherInfoModel";

import { weatherInfoItemStyles } from "../../../styles/GeneralWeatherInfoItemStyles";

type WeatherInfoItemProps = {
    weather: IDailyModel;
    title: string;
};

const GeneralWeatherInfoItem = (props: WeatherInfoItemProps) => {
    const renderCircle = () => (
        <View>
            <MaterialCommunityIcons name={"circle-outline"} size={6} style={weatherInfoItemStyles.circleImage} />
        </View>
    );

    const renderWeatherInfo = (weather: IDailyModel, title: string) => {
        const icon = (weather && weather.weather && weather.weather[0] && weather.weather[0].icon) ?? "";
        const description = (weather && weather.weather && weather.weather[0] && weather.weather[0].description) ?? "";
        const day = (weather && weather.temp && weather.temp.day) ?? 0;
        const night = (weather && weather.temp && weather.temp.night) ?? 0;
        return (
            <View style={weatherInfoItemStyles.view}>
                <Image
                    style={weatherInfoItemStyles.image}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                    }}
                />
                <Text style={weatherInfoItemStyles.text}>{`${title}: `}</Text>
                <Text style={weatherInfoItemStyles.text}>{description}</Text>
                <Text style={weatherInfoItemStyles.temperatureText}>
                    {Number(day.toFixed(0))}
                    {renderCircle()}
                    {"/"}
                    {Number(night.toFixed(0))}
                    {renderCircle()}
                </Text>
            </View>
        );
    };

    return renderWeatherInfo(props.weather, props.title);
};

export default GeneralWeatherInfoItem;
