import { getDate, getDayOfWeek } from "../../../utils/dateHelper";
import { getWeatherImage } from "../../../utils/imageHelper";
import { getWindDirection } from "../../../utils/windDirection";
import CircleView from "../../genenal/CircleView";
import Header from "../../genenal/Header";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import { IDailyModel, IWeatherModel } from "../../../interfaces/weatherInfoModel";

import { weekWeatherInfoScreenStyles } from "../../../styles/weekWeatherInfoScreenStyles";

const WeekWeatherInfoScreen = () => {
    const navigation = useNavigation();
    const daily: IDailyModel[] = useSelector((state: any) => state.weather.current.daily);

    const goBack = () => {
        navigation.goBack();
    };

    const cell_dayView = (time: number) => (
        <View style={weekWeatherInfoScreenStyles.cell_dayView}>
            <Text style={weekWeatherInfoScreenStyles.cell_titleText}>{getDate(time * 1000)}</Text>
            <Text>{getDayOfWeek(time * 1000)}</Text>
        </View>
    );

    const cell_weatherView = (weather: IWeatherModel) => (
        <View style={weekWeatherInfoScreenStyles.cell_weatherView}>
            <Image style={weekWeatherInfoScreenStyles.cell_weatherImage} source={getWeatherImage(weather.icon)} />
            <Text style={weekWeatherInfoScreenStyles.cell_weatherDesc}>{`${weather.description}`}</Text>
        </View>
    );

    const cell_tempInfoView = (timeOfDay: string, temp: number) => (
        <View style={weekWeatherInfoScreenStyles.cell_tempInfoView}>
            <Text>{timeOfDay}</Text>
            <View style={weekWeatherInfoScreenStyles.cell_tempNumberView}>
                <Text>{`${temp.toFixed(0)}`}</Text>
                <CircleView color="#000000" />
            </View>
        </View>
    );

    const cell_weatherWindView = (wind_deg: number, wind_speed: number) => (
        <View style={weekWeatherInfoScreenStyles.cell_weatherWind}>
            <Text>{`${getWindDirection(wind_deg)}`}</Text>
            <Text>{`${wind_speed} м/с`}</Text>
        </View>
    );

    const dayWeatherView = (weather: IDailyModel) => (
        <View style={weekWeatherInfoScreenStyles.cell}>
            {cell_dayView(weather.dt)}
            {cell_weatherView(weather.weather && weather.weather[0] && weather.weather[0])}
            {cell_tempInfoView("Днем", weather.temp && weather.temp.day)}
            {cell_tempInfoView("Ночью", weather.temp && weather.temp.night)}
            {cell_weatherWindView(weather.wind_deg, weather.wind_speed)}
        </View>
    );

    const horLine = () => <View style={weekWeatherInfoScreenStyles.horLine} />;

    return (
        <View style={weekWeatherInfoScreenStyles.container}>
            {Header({ title: "Йошкар - Ола", goBack })}
            <ScrollView>
                <View style={weekWeatherInfoScreenStyles.content}>
                    {daily.map((weather, index) => (
                        <React.Fragment key={weather.dt}>
                            {dayWeatherView(weather)}
                            {index < daily.length ? horLine() : null}
                        </React.Fragment>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default WeekWeatherInfoScreen;
