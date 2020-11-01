import { Dimensions, StyleSheet } from "react-native";

export const detailScreenStyles = StyleSheet.create({
    cellView: {
        width: 90,
        height: 150,
        alignItems: "center",
        margin: 2,
        backgroundColor: "gainsboro",
        borderRadius: 10,
        paddingVertical: 10,
    },
    cellViewTime: {
        fontSize: 16,
    },
    cellViewTempWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    cellViewTemp: {
        fontSize: 20,
    },
    cellViewImage: {
        width: 50,
        height: 50,
    },
    cellViewWind: {
        alignItems: "center",
    },
});

export const mainInfoViewStyles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height - 295,
        backgroundColor: "gainsboro",
        borderRadius: 20,
        marginHorizontal: 5,
        marginBottom: 5,
        padding: 10,
    },
    view: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 50,
    },
    leftView: {
        flexDirection: "column",
        width: "50%",
        height: 50,
    },
    title: {
        color: "dimgray",
        fontSize: 16,
    },
    subtitle: {
        fontSize: 20,
        color: "black",
    },
    rightView: {
        flexDirection: "column",
        width: "50%",
    },
});
