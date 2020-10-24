import * as React from "react";
import { Appbar } from "react-native-paper";

type HeaderProps = {
    title: string;
    goBack?(): Function;
};

const Header = (props: HeaderProps) => (
    <Appbar.Header style={{ backgroundColor: "#273c52" }}>
        {props.goBack ? <Appbar.BackAction onPress={props.goBack} /> : <React.Fragment />}
        <Appbar.Content title={props.title} style={{ alignItems: "center" }} titleStyle={{ color: "#ffffff" }} />
    </Appbar.Header>
);

export default Header;
