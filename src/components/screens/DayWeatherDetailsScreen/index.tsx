import Header from "../../genenal/Header";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { IDailyModel } from "../../../interfaces/weatherInfoModel";

import { weekWeatherInfoScreenStyles } from "../../../styles/weekWeatherInfoScreenStyles";

const DayWeatherDetailsScreen = () => {
    const navigation = useNavigation();
    const daily: IDailyModel[] = useSelector((state: any) => state.weather.current.daily);

    const goBack = () => {
        navigation.goBack();
    };

    return <View style={weekWeatherInfoScreenStyles.container}>{Header({ title: "Йошкар - Ола", goBack })}</View>;
};

export default DayWeatherDetailsScreen;
