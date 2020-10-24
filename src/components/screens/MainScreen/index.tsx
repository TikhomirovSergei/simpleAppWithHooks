import Header from "../../genenal/Header";
import GeneralWeatherInfoItem from "./GeneralWeatherInfoItem";

import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect, useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../../redux/actions/weatherAction";

import { ICurrentModel, IWeatherResponse } from "../../../interfaces/weatherInfoModel";

import { mainScreenStyles } from "../../../styles/MainScreenStyles";

const mapDispatchToProps = () => {
    return {
        getWeather,
    };
};

const MainScreen = () => {
    const current: IWeatherResponse = useSelector((state: any) => state.weather.current);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather());
    }, []);

    const currentTemp = (temp: number) => (
        <View style={mainScreenStyles.currentWeatherViewBlock}>
            <Text style={mainScreenStyles.currentWeatherViewTemp}>{temp}</Text>
            <MaterialCommunityIcons
                name={"temperature-celsius"}
                size={24}
                style={mainScreenStyles.currentWeatherViewTempIcom}
            />
        </View>
    );

    const currentTempDescription = (weather: ICurrentModel) => {
        const description = (weather && weather.weather && weather.weather[0] && weather.weather[0].description) ?? "";
        return (
            <View style={mainScreenStyles.currentWeatherViewDescBlock}>
                <Text style={mainScreenStyles.currentWeatherViewDescText}>{description}</Text>
            </View>
        );
    };

    const moreDetailsButton = () => (
        <View style={mainScreenStyles.footerMoreDetailView}>
            <Text style={mainScreenStyles.footerMoreDetailText}>{"Подробнее "}</Text>
            <MaterialCommunityIcons name={"chevron-right"} size={30} style={mainScreenStyles.footerMoreDetailIcon} />
        </View>
    );

    const weekPredictionButton = () => (
        <Button
            mode="outlined"
            style={mainScreenStyles.footerPredictionButton}
            contentStyle={mainScreenStyles.footerPredictionButtonContent}
            labelStyle={mainScreenStyles.footerPredictionButtonLabel}
            onPress={() => console.log("Pressed")}>
            Прогноз на неделю
        </Button>
    );

    return (
        <View style={mainScreenStyles.container}>
            {Header({ title: "Йошкар - Ола" })}
            <LinearGradient colors={["#273c52", "#8e9091"]} style={mainScreenStyles.gradient}>
                <View style={mainScreenStyles.currentWeatherView}>
                    {currentTemp(current && current.current && current.current.temp)}
                    {currentTempDescription(current && current.current)}
                </View>
                <View style={mainScreenStyles.footer}>
                    {moreDetailsButton()}
                    {GeneralWeatherInfoItem({
                        weather: current && current.daily && current.daily[0],
                        title: "Сегодня",
                    })}
                    {GeneralWeatherInfoItem({
                        weather: current && current.daily && current.daily[1],
                        title: "Завтра",
                    })}
                    {GeneralWeatherInfoItem({
                        weather: current && current.daily && current.daily[2],
                        title: "После завтра",
                    })}
                    {weekPredictionButton()}
                </View>
            </LinearGradient>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
