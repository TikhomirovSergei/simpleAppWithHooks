import { StyleSheet } from "react-native";

export const weekWeatherInfoScreenStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    },
    content: {
        flex: 1,
        flexDirection: "column",
    },
    horLine: {
        backgroundColor: "gray",
        width: "100%",
        height: 0.5,
    },
    cell: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 12,
    },
    cell_dayView: {
        width: 45,
        alignItems: "center",
    },
    cell_titleText: {
        fontWeight: "500",
        fontSize: 16,
    },
    cell_weatherView: {
        width: 100,
        alignItems: "center",
    },
    cell_weatherImage: {
        height: 50,
        width: 50,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: "black",
        shadowOpacity: 1,
        backgroundColor: "#0000",
    },
    cell_weatherDesc: {
        textAlign: "center",
    },
    cell_tempInfoView: {
        marginVertical: 20,
        alignItems: "center",
    },
    cell_tempNumberView: {
        flexDirection: "row",
        marginVertical: 5,
        alignItems: "center",
    },
    cell_weatherWind: {
        marginVertical: 20,
        alignItems: "center",
    },
});
