import { getHour } from "../../../utils/dateHelper";
import { getWeatherImage } from "../../../utils/imageHelper";
import { getWindDirection } from "../../../utils/windDirection";
import CircleView from "../../genenal/CircleView";
import Header from "../../genenal/Header";

import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, Text, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";

import { IDailyModel, IHourlyModel } from "../../../interfaces/weatherInfoModel";

import { detailScreenStyles, mainInfoViewStyles } from "../../../styles/detailScreenStyles";
import { weekWeatherInfoScreenStyles } from "../../../styles/weekWeatherInfoScreenStyles";

const DayWeatherDetailsScreen = () => {
    const navigation = useNavigation();
    const daily: IDailyModel[] = useSelector((state: any) => state.weather.current.daily);
    const hourly: IHourlyModel[] = useSelector((state: any) => state.weather.current.hourly);

    const goBack = () => {
        navigation.goBack();
    };

    const hourWeatherView = (item: IHourlyModel) => (
        <View style={detailScreenStyles.cellView} key={item.dt}>
            <Text style={detailScreenStyles.cellViewTime}>{getHour(item.dt * 1000)}</Text>
            <View style={detailScreenStyles.cellViewTempWrapper}>
                <Text style={detailScreenStyles.cellViewTemp}>{`${item.temp.toFixed(1)}`}</Text>
                <CircleView color="#000000" />
            </View>
            <Image style={detailScreenStyles.cellViewImage} source={getWeatherImage(item.weather[0].icon)} />
            <View style={detailScreenStyles.cellViewWind}>
                <Text>{`${getWindDirection(item.wind_deg)}`}</Text>
                <Text>{`${item.wind_speed.toFixed(1)} м/с`}</Text>
            </View>
        </View>
    );

    const mainInfoViewItem = (
        left: { title: string; value: string; image?: string },
        right: { title: string; value: string },
    ) => (
        <View style={mainInfoViewStyles.view}>
            <View style={mainInfoViewStyles.leftView}>
                <Text style={mainInfoViewStyles.title}>{left.title}</Text>
                {left.image ? (
                    <View style={{ flexDirection: "row" }}>
                        <Text style={mainInfoViewStyles.subtitle}>{left.value}</Text>
                        <MaterialCommunityIcons name={left.image} size={24} style={{ top: 1 }} />
                    </View>
                ) : (
                    <Text style={mainInfoViewStyles.subtitle}>{left.value}</Text>
                )}
            </View>
            <View style={mainInfoViewStyles.rightView}>
                <Text style={mainInfoViewStyles.title}>{right.title}</Text>
                <Text style={mainInfoViewStyles.subtitle}>{right.value}</Text>
            </View>
        </View>
    );

    const getMinutes = (minutes: number): string => (minutes > 9 ? `${minutes}` : `0${minutes}`);

    const showTimeView = () => {
        const sunrise = new Date(daily[0].sunrise * 1000);
        const sunset = new Date(daily[0].sunset * 1000);
        return mainInfoViewItem(
            {
                title: "Восход",
                value: `${sunrise.getHours()}:${getMinutes(sunrise.getMinutes())}`,
            },
            {
                title: "Заход",
                value: `${sunset.getHours()}:${getMinutes(sunset.getMinutes())}`,
            },
        );
    };

    const showSecondLineView = () =>
        mainInfoViewItem(
            {
                title: "Ощущается",
                value: `${daily[0].feels_like.day}`,
                image: "temperature-celsius",
            },
            {
                title: "Влажность",
                value: `${daily[0].humidity}%`,
            },
        );

    const showthirdLineView = () =>
        mainInfoViewItem(
            {
                title: "Вероятность дождя",
                value: `${(daily[0].feels_like.day * 10).toFixed(0)}%`,
            },
            {
                title: "Давление",
                value: `${daily[0].pressure}hPa`,
            },
        );

    const showFourLineView = () =>
        mainInfoViewItem(
            {
                title: "Атмосферная температура",
                value: `${daily[0].dew_point.toFixed(0)}`,
            },
            {
                title: "Индекс УФ",
                value: `${daily[0].uvi}`,
            },
        );

    return (
        <View style={weekWeatherInfoScreenStyles.container}>
            {Header({ title: "Йошкар - Ола", goBack })}
            <SwipeListView
                useFlatList={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={hourly}
                renderItem={({ item }: any) => hourWeatherView(item)}
            />
            <View style={mainInfoViewStyles.container}>
                {showTimeView()}
                {showSecondLineView()}
                {showthirdLineView()}
                {showFourLineView()}
            </View>
        </View>
    );
};

export default DayWeatherDetailsScreen;
