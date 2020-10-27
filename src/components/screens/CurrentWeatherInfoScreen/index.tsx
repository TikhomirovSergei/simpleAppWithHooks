import { getDate } from "../../../utils/dateHelper";
import { getWindDirection } from "../../../utils/windDirection";
import CircleView from "../../genenal/CircleView";
import Header from "../../genenal/Header";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

import { IDailyModel } from "../../../interfaces/weatherInfoModel";

const CurrentWeatherInfoScreen = () => {
    const navigation = useNavigation();
    const daily: IDailyModel[] = useSelector((state: any) => state.weather.current.daily);

    const goBack = () => {
        navigation.goBack();
    };

    const tempInfoView = (timeOfDay: string, temp: number) => (
        <View style={{ marginVertical: 20, alignItems: "center" }}>
            <Text>{timeOfDay}</Text>
            <View style={{ flexDirection: "row", marginVertical: 5, alignItems: "center" }}>
                <Text>{`${temp}`}</Text>
                <CircleView color="#000000" />
            </View>
        </View>
    );

    const dayWeatherView = (weather: IDailyModel) => (
        <View style={{ alignItems: "center", width: 100 }}>
            <Text>{getDate(weather.dt * 1000)}</Text>
            <Image
                style={{ height: 60, width: 60 }}
                source={{
                    uri: `http://openweathermap.org/img/wn/${
                        weather.weather && weather.weather[0] && weather.weather[0].icon
                    }@2x.png`,
                }}
            />
            <Text style={{ textAlign: "center", height: 50 }}>{`${
                weather.weather && weather.weather[0] && weather.weather[0].description
            }`}</Text>
            {tempInfoView("Днем:", weather.temp && weather.temp.day)}
            {tempInfoView("Ночью:", weather.temp && weather.temp.night)}
            <View style={{ marginVertical: 20, alignItems: "center" }}>
                <Text>{`${getWindDirection(weather.wind_deg)}`}</Text>
                <Text>{`${weather.wind_speed} м/с`}</Text>
            </View>
        </View>
    );

    const horLine = () => <View style={{ backgroundColor: "black", width: 2, height: 340, marginVertical: 10 }} />;

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
            {Header({ title: "Йошкар - Ола", goBack })}
            <ScrollView horizontal={true}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 700,
                        height: "100%",
                        marginTop: 20,
                        marginHorizontal: 5,
                    }}>
                    {daily.map((weather, index) => {
                        return (
                            <>
                                {dayWeatherView(weather)}
                                {index < daily.length ? horLine() : null}
                            </>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
};

export default CurrentWeatherInfoScreen;
