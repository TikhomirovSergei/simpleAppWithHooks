import { getDayOfWeek } from "../../../utils/dateHelper";
import GeneralWeatherInfoItem from "./GeneralWeatherInfoItem";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { IWeatherResponse } from "../../../interfaces/weatherInfoModel";

import { mainScreenStyles } from "../../../styles/mainScreenStyles";

type FooterInfoViewProps = {
    current: IWeatherResponse;
    refreshig: boolean;
};

const FooterInfoView = (props: FooterInfoViewProps) => {
    const navigation = useNavigation();

    const moreDetailsButton = () => (
        <View style={mainScreenStyles.footerMoreDetailView}>
            <TouchableOpacity
                onPress={() => navigation.navigate("DayWeatherDetails")}
                style={mainScreenStyles.footerMoreDetailButton}>
                <Text style={mainScreenStyles.footerMoreDetailText}>{"Подробнее "}</Text>
                <MaterialCommunityIcons
                    name={"chevron-right"}
                    size={28}
                    style={mainScreenStyles.footerMoreDetailIcon}
                />
            </TouchableOpacity>
        </View>
    );

    const weekPredictionButton = () => (
        <Button
            mode="outlined"
            disabled={props.refreshig}
            style={mainScreenStyles.footerPredictionButton}
            contentStyle={mainScreenStyles.footerPredictionButtonContent}
            labelStyle={mainScreenStyles.footerPredictionButtonLabel}
            color={"#273c52"}
            onPress={() => navigation.navigate("WeekWeatherInfo")}>
            Прогноз на неделю
        </Button>
    );

    return (
        <View style={mainScreenStyles.footer}>
            {moreDetailsButton()}
            {GeneralWeatherInfoItem({
                weather: props.current && props.current.daily && props.current.daily[0],
                title: "Сегодня",
            })}
            {GeneralWeatherInfoItem({
                weather: props.current && props.current.daily && props.current.daily[1],
                title: "Завтра",
            })}
            {GeneralWeatherInfoItem({
                weather: props.current && props.current.daily && props.current.daily[2],
                title: `${getDayOfWeek(
                    props.current && props.current.daily && props.current.daily[2] && props.current.daily[2].dt * 1000,
                )}`,
            })}
            {weekPredictionButton()}
        </View>
    );
};

export default FooterInfoView;
