import Header from "../genenal/Header";

import React, { useEffect } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect, useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../redux/actions/weatherAction";

import { ICurrentModel, IDailyModel, IWeatherResponse } from "../../interfaces/weatherInfoModel";

import { circle, temperature } from "../../styles/sourcePath";

const mapDispatchToProps = (dispatch: Function) => {
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

    const today = (weather: IDailyModel, title: string) => {
        const icon = (weather && weather.weather && weather.weather[0] && weather.weather[0].icon) ?? "";
        const description = (weather && weather.weather && weather.weather[0] && weather.weather[0].description) ?? "";
        const day = (weather && weather.temp && weather.temp.day) ?? 0;
        const night = (weather && weather.temp && weather.temp.night) ?? 0;
        return (
            <View style={{ flex: 1, flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <Image
                    style={{ width: 30, height: 30 }}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${icon}@2x.png`,
                    }}
                />
                <Text style={{ fontWeight: "600", fontSize: 14, color: "#ffffff" }}>{`${title}: `}</Text>
                <Text style={{ fontWeight: "600", fontSize: 14, color: "#ffffff" }}>{description}</Text>
                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 14,
                        position: "absolute",
                        right: 0,
                        color: "#ffffff",
                    }}>
                    {Number(day.toFixed(0))}
                    <View>
                        <Image
                            style={{ width: 5, height: 5, position: "absolute", top: -10, tintColor: "#ffffff" }}
                            source={circle}
                        />
                    </View>
                    {"  /"}
                    {Number(night.toFixed(0))}
                    <View>
                        <Image
                            style={{ width: 5, height: 5, position: "absolute", top: -10, tintColor: "#ffffff" }}
                            source={circle}
                        />
                    </View>
                    {"  "}
                </Text>
            </View>
        );
    };

    const currentTemp = (temp: number) => (
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Text style={{ fontWeight: "600", fontSize: 150, color: "#ffffff" }}>{temp}</Text>
            <Image style={{ width: 20, height: 20, top: 50, tintColor: "#ffffff" }} source={temperature} />
        </View>
    );

    const currentTempDescription = (weather: ICurrentModel) => {
        const description = (weather && weather.weather && weather.weather[0] && weather.weather[0].description) ?? "";
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 20, color: "#ffffff" }}>{description}</Text>
            </View>
        );
    };

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#FFF9D0" }}>
            {Header({ title: "Йошкар - Ола" })}
            <LinearGradient
                colors={["#273c52", "#8e9091"]}
                style={{ position: "absolute", width: "100%", height: "100%" }}>
                <View
                    style={{
                        flex: 1,
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        top: -Dimensions.get("window").height / 5,
                    }}>
                    {currentTemp(current && current.current && current.current.temp)}
                    {currentTempDescription(current && current.current)}
                </View>
                <View style={{ position: "absolute", bottom: 0, width: "100%", padding: 20 }}>
                    <View style={{ flexDirection: "row", alignSelf: "flex-end", justifyContent: "center", margin: 0 }}>
                        <Text style={{ color: "#ffffff" }}>{"Подробнее "}</Text>
                        <MaterialCommunityIcons
                            name={"chevron-right"}
                            size={30}
                            style={{ top: -5, color: "#ffffff" }}
                        />
                    </View>
                    {today(current && current.daily && current.daily[0], "Сегодня")}
                    {today(current && current.daily && current.daily[1], "Завтра")}
                    {today(current && current.daily && current.daily[2], "После завтра")}
                    <Button
                        mode="outlined"
                        style={{
                            borderRadius: 40,
                            backgroundColor: "lightgray",
                            marginTop: 20,
                            marginBottom: 10,
                            height: 55,
                        }}
                        contentStyle={{ padding: 10 }}
                        labelStyle={{ color: "#000000" }}
                        onPress={() => console.log("Pressed")}>
                        Прогноз на неделю
                    </Button>
                </View>
            </LinearGradient>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
