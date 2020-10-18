import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../redux/actions/weatherAction";

import { IWeatherInfoModel } from "../../interfaces/weatherInfoModel";

const mapDispatchToProps = (dispatch: Function) => {
    return {
        getWeather,
    };
};

const MainScreen = () => {
    const current: IWeatherInfoModel = useSelector((state: any) => state.weather.current);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeather());
    }, []);

    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={{ width: "100%", height: 55, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>{current && current.name}</Text>
            </View>
            <View style={{ width: "100%", height: "60%", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "600", fontSize: 150 }}>
                    {current && current.main.temp !== 0 && `${current.main.temp - 273.15}`}
                </Text>
                <Text style={{ fontWeight: "600", fontSize: 20 }}>
                    {current && current.weather[0] && `${current.weather[0].description}`}
                </Text>
            </View>
        </View>
    );
};

export default connect(null, mapDispatchToProps)(MainScreen);
