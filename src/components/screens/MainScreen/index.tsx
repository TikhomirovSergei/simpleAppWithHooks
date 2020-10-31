import Header from "../../genenal/Header";
import FooterInfoView from "./FooterInfoView";

import React, { useEffect, useState } from "react";
import { RefreshControl, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
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
                {FooterInfoView({ current, refreshig })}
            </LinearGradient>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
