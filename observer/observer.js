// @unzferk
var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.setTemperature = function (temp) {
        console.log("WeatherStation: new temperaturemeasurement: " + temp);
        this.temperature = temp;
        this.notifyObservers();
    };
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifyObservers = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.temperature);
            //logic comes here
        }
    };
    return WeatherStation;
}());
var TemperatureDisplay = /** @class */ (function () {
    function TemperatureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TemperatureDisplay.prototype.update = function (temperature) {
        console.log("TemperatureDisplay: I need to update my display");
    };
    return TemperatureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (temperature) {
        if (temperature > 25) {
            console.log("Fan: Temperature>25 Turning myself on...");
            //logic comes here
        }
        else {
            console.log("Fan: All good for now, Turning myself off...");
        }
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
var temperatureDisplay = new TemperatureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTemperature(20);
weatherStation.setTemperature(40);
