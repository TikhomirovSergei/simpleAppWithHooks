import { Dimensions, StyleSheet } from "react-native";

export const mainScreenStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#FFF9D0",
    },
    gradient: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    currentWeatherView: {
        flex: 1,
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
        top: -Dimensions.get("window").height / 5,
    },
    currentWeatherViewBlock: {
        flexDirection: "row",
        alignItems: "flex-start",
    },
    currentWeatherViewTemp: {
        fontWeight: "600",
        fontSize: 150,
        color: "#ffffff",
    },
    currentWeatherViewTempIcom: {
        top: 45,
        color: "#ffffff",
    },
    currentWeatherViewDescBlock: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentWeatherViewDescText: {
        fontWeight: "600",
        fontSize: 20,
        color: "#ffffff",
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: 20,
    },
    footerMoreDetailView: {
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "center",
        margin: 0,
    },
    footerMoreDetailText: {
        color: "#ffffff",
    },
    footerMoreDetailIcon: {
        top: -5,
        color: "#ffffff",
    },
    footerPredictionButton: {
        borderRadius: 40,
        backgroundColor: "lightgray",
        marginTop: 20,
        marginBottom: 10,
        height: 55,
    },
    footerPredictionButtonContent: {
        padding: 10,
    },
    footerPredictionButtonLabel: {
        color: "#000000",
    },
});
