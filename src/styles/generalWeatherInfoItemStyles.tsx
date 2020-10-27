import { StyleSheet } from "react-native";

export const weatherInfoItemStyles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },
    image: {
        width: 30,
        height: 30,
    },
    text: {
        fontWeight: "600",
        fontSize: 14,
        color: "#ffffff",
    },
    temperatureText: {
        fontWeight: "600",
        fontSize: 14,
        position: "absolute",
        right: 0,
        color: "#ffffff",
    },
});
