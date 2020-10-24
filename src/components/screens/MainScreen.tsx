import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../redux/actions/weatherAction";

import { IWeatherResponse } from "../../interfaces/weatherInfoModel";

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

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "deepskyblue" }}>
            <View style={{ width: "100%", height: 55, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>{"Йошкар - Ола"}</Text>
            </View>
            <View style={{ width: "100%", height: "60%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 151 }}>
                    {current && current.current && current.current.temp}
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    {current && current.current && current.current.weather[0] && current.current.weather[0].description}
                </Text>
                {current && current.current && current.current.weather[0] && current.current.weather[0].icon ? (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${current.current.weather[0].icon}@2x.png`,
                        }}
                    />
                ) : (
                    <></>
                )}
            </View>
            <View>
                {current &&
                current.daily &&
                current.daily[0] &&
                current.daily[0].weather &&
                current.daily[0].weather[0] &&
                current.daily[0].weather[0].icon ? (
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={{
                            uri: `http://openweathermap.org/img/wn/${current.daily[0].weather[0].icon}@2x.png`,
                        }}
                    />
                ) : (
                    <></>
                )}
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    {current &&
                        current.daily &&
                        current.daily[0] &&
                        current.daily[0].weather &&
                        current.daily[0].weather[0] &&
                        current.daily[0].weather[0].description}
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    {current &&
                        current.daily &&
                        current.daily[0] &&
                        current.daily[0].temp &&
                        current.daily[0].temp &&
                        current.daily[0].temp.day}
                    /
                    {current &&
                        current.daily &&
                        current.daily[0] &&
                        current.daily[0].temp &&
                        current.daily[0].temp &&
                        current.daily[0].temp.night}
                </Text>
            </View>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
