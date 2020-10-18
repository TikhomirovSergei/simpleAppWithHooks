import { AppRegistry } from "react-native";
import "react-native-gesture-handler";

import { name as appName } from "./app.json";
import Root from "./src/Root";

var globalObject = typeof self === "undefined" ? global : self;
module.exports = globalObject.fetch.bind(globalObject);

AppRegistry.registerComponent(appName, () => Root);
