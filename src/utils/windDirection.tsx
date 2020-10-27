export const getWindDirection = (degrees: number) => {
    switch (true) {
        case degrees > 337.5 && degrees <= 22.5:
            return "С";
        case degrees > 22.5 && degrees <= 67.5:
            return "С-В";
        case degrees > 67.5 && degrees <= 112.5:
            return "В";
        case degrees > 112.5 && degrees <= 157.5:
            return "Ю-В";
        case degrees > 157.5 && degrees <= 202.5:
            return "Ю";
        case degrees > 202.5 && degrees <= 247.5:
            return "Ю-З";
        case degrees > 247.5 && degrees <= 292.5:
            return "З";
        case degrees > 292.5 && degrees <= 337.5:
            return "С-З";
        default:
            return "";
    }
};
