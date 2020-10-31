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
        width: Dimensions.get("window").width,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Dimensions.get("screen").height / 16,
    },
    currentWeatherViewBlock: {
        flexDirection: "row",
        alignItems: "center",
    },
    currentWeatherViewTemp: {
        fontWeight: "600",
        fontSize: 150,
        color: "#ffffff",
    },
    currentWeatherViewTempIcom: {
        top: -45,
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
        top: 20,
        marginRight: -5,
    },
    footerMoreDetailButton: {
        flexDirection: "row",
        alignSelf: "flex-end",
        justifyContent: "center",
        marginBottom: 20,
    },
    footerMoreDetailText: {
        color: "#ffffff",
    },
    footerMoreDetailIcon: {
        top: -4,
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
        width: "100%",
        height: "100%",
    },
    footerPredictionButtonLabel: {
        color: "#000000",
    },
});
