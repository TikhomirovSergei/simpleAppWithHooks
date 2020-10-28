export const getDate = (time: number): string => {
    const date = new Date(time);
    let day = date.getDate();
    let zero = day < 10 ? "0" : "";
    return `${zero}${day}.${date.getMonth() + 1}`;
};

export const getDayOfWeek = (time: number): string => {
    const date = new Date(time).getDay();
    switch (date) {
        case 1:
            return "Пн";
        case 2:
            return "Вт";
        case 3:
            return "Ср";
        case 4:
            return "Чт";
        case 5:
            return "Пт";
        case 6:
            return "Сб";
        default:
            return "Вс";
    }
};
