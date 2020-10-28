import { getDayOfWeek } from "../../../utils/dateHelper";
import Header from "../../genenal/Header";
import GeneralWeatherInfoItem from "./GeneralWeatherInfoItem";

import { useNavigation } from "@react-navigation/native";

import React, { useEffect, useState } from "react";
import { RefreshControl, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect, useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../../redux/actions/weatherAction";

import { ICurrentModel, IWeatherResponse } from "../../../interfaces/weatherInfoModel";

import { mainScreenStyles } from "../../../styles/mainScreenStyles";

const mapDispatchToProps = () => {
    return {
        getWeather,
    };
};

const MainScreen = () => {
    const navigation = useNavigation();
    const current: IWeatherResponse = useSelector((state: any) => state.weather.current);
    const dispatch = useDispatch();
    const [refreshig, onRefresh] = useState(true);

    useEffect(() => {
        dispatch(getWeather(() => onRefresh(false)));
    }, []);

    const currentTempView = (temp: number) => (
        <View style={mainScreenStyles.currentWeatherViewBlock}>
            <Text style={mainScreenStyles.currentWeatherViewTemp}>{temp}</Text>
            <MaterialCommunityIcons
                name={"temperature-celsius"}
                size={24}
                style={mainScreenStyles.currentWeatherViewTempIcom}
            />
        </View>
    );

    const currentTempDescriptionView = (weather: ICurrentModel) => {
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
            disabled={refreshig}
            style={mainScreenStyles.footerPredictionButton}
            contentStyle={mainScreenStyles.footerPredictionButtonContent}
            labelStyle={mainScreenStyles.footerPredictionButtonLabel}
            color={"#273c52"}
            onPress={() => navigation.navigate("WeekWeatherInfo")}>
            Прогноз на неделю
        </Button>
    );

    const footerView = () => (
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
                title: `${getDayOfWeek(current && current.daily && current.daily[2] && current.daily[2].dt * 1000)}`,
            })}
            {weekPredictionButton()}
        </View>
    );

    const onRefreshAction = () => {
        dispatch(getWeather(() => onRefresh(false)));
    };

    return (
        <View style={mainScreenStyles.container}>
            {Header({ title: "Йошкар - Ола" })}
            <LinearGradient colors={["#273c52", "#8e9091"]} style={mainScreenStyles.gradient}>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={refreshig} onRefresh={onRefreshAction} />}
                    style={{ top: 50 }}>
                    <View style={mainScreenStyles.currentWeatherView}>
                        {currentTempView(current && current.current && current.current.temp)}
                        {currentTempDescriptionView(current && current.current)}
                    </View>
                </ScrollView>
                {footerView()}
            </LinearGradient>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
