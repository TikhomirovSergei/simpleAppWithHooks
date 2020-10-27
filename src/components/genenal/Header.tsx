import * as React from "react";
import { Appbar } from "react-native-paper";

import { headerStyles } from "../../styles/headerStyles";

type HeaderProps = {
    title: string;
    goBack?(): void;
};

const Header = (props: HeaderProps) => (
    <Appbar.Header style={headerStyles.header}>
        {props.goBack ? <Appbar.BackAction onPress={props.goBack} /> : <React.Fragment />}
        <Appbar.Content
            title={props.title}
            style={props.goBack ? headerStyles.contentLeft : headerStyles.content}
            titleStyle={headerStyles.contentTitle}
        />
    </Appbar.Header>
);

export default Header;
