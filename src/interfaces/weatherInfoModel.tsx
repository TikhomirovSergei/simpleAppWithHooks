export type IWeatherModel = {
    id: number; // Идентификатор погодных условий
    main: string; // Группа погодных параметров (Дождь, Снег, Экстрим и др.)
    description: string; // Погодные условия в группе.
    icon: string; // Идентификатор значка погоды
};

export type IRainModel = {
    "1h": number; // Объем дождя за последние час, мм
};

export type ISnowModel = {
    "1h": number; // Объем снега за последние 1 час
};

export type IWeatherResponse = {
    lat: number; // Географическое положение города, широта
    lon: number; // Географическое положение города, долгот
    timezone: number; // Сдвиг в секундах от UTCа
    timezone_offset: number; // Сдвиг в секундах от UTC
    current: ICurrentModel; // Текущий ответ API данных о погоде
    minutely: IMinutelyModel[]; // Ответ API данных о погоде минутного прогноза
    hourly: IHourlyModel[]; // Почасовой прогноз API данных о погоде
    daily: IDailyModel[]; // Ответ API данных о погоде на день
    alerts: IAlertsModel[]; // Данные государственных метеорологических предупреждений из основных национальных систем метеорологических предупреждений
};

export type ICurrentModel = {
    dt: number; // Время расчета данных, unix, UTC
    sunrise: number; // Время восхода, unix, UTC
    sunset: number; // Время заката, unix, UTC
    temp: number; // Температура.
    feels_like: number; // Температура. Этот температурный параметр объясняет человеческое восприятие погоды.
    pressure: number; // Атмосферное давление, гПа
    humidity: number; // Влажность, %
    dew_point: number; // Атмосферная температура
    clouds: number; // Облачность, %
    uvi: number; // Полуденный УФ-индекс
    visibility: number; // Видимость, метр
    wind_speed: number; // Скорость ветра. Единица измерения по умолчанию: метр / сек
    wind_deg: number; // Направление ветра, градусы (метеорологические)
    rain: IRainModel; // Объем дождя
    snow: ISnowModel; // Объем снега
    weather: IWeatherModel[];
};

export type IMinutelyModel = {
    dt: number; // Время расчета данных, unix, UTC
    precipitation: number; // Объем осадков
};

export type IHourlyModel = {
    dt: number; // Время расчета данных, unix, UTC
    temp: number; // Температура.
    feels_like: number; // Температура. Этот температурный параметр объясняет человеческое восприятие погоды.
    pressure: number; // Атмосферное давление, гПа
    humidity: number; // Влажность, %
    dew_point: number; // Атмосферная температура
    clouds: number; // Облачность, %
    visibility: number; // Видимость, метр
    wind_speed: number; // Скорость ветра. Единица измерения по умолчанию: метр / сек
    wind_deg: number; // Направление ветра, градусы (метеорологические)
    weather: IWeatherModel[];
    pop: number; // Вероятность выпадения осадков
    rain: IRainModel; // Объем дождя
    snow: ISnowModel; // Объем снега
};

export type IDailyModel = {
    dt: number; // Время расчета данных, unix, UTC
    sunrise: number; // Время восхода, unix, UTC
    sunset: number; // Время заката, unix, UTC
    temp: {
        day: number; // Дневная температура.
        min: number; // Минимальная дневная температура.
        max: number; // Максимальная дневная температура.
        night: number; // Ночная температура.
        eve: number; // Вечерняя температура..
        morn: number; // Утренняя температура.
    };
    feels_like: {
        // Это объясняет человеческое восприятие погоды
        day: number; // Дневная температура.
        night: number; // Ночная температура.
        eve: number; // Вечерняя температура.
        morn: number; // Утренняя температура.
    };
    pressure: number; // Атмосферное давление, гПа
    humidity: number; // Влажность, %
    dew_point: number; // Атмосферная температура
    wind_speed: number; // Скорость ветра. Единица измерения по умолчанию: метр / сек
    wind_deg: number; // Направление ветра, градусы (метеорологические)
    weather: IWeatherModel[];
    pop: number; // Вероятность выпадения осадков
    rain: IRainModel; // Объем дождя
    snow: ISnowModel; // Объем снега
    uvi: number; // Полуденный УФ-индекс
};

export type IAlertsModel = {
    sender_name: string; // Имя источника оповещения
    event: string; // Название события оповещения
    start: number; // Дата и время начала оповещения, Unix, UTC
    end: number; // Дата и время окончания предупреждения, Unix, UTC
    description: string; // Описание оповещения
};
