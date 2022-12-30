// @unzferk

/* 
Oberver Pattern
Explanation: Observer pattern usually modify the state of a class once an event is detected
*/

interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}
interface Observer {
  update(temperature: number);
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperaturemeasurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }
  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
      //logic comes here
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    console.log("TemperatureDisplay: I need to update my display");
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }
  update(temperature: number) {
    if (temperature > 25) {
      console.log("Fan: Temperature>25 Turning myself on...");
      //logic comes here
    } else {
      console.log("Fan: All good for now, Turning myself off...");
    }
  }
}

let weatherStation = new WeatherStation();

let temperatureDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(40);
