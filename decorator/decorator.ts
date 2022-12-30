//@unzferk
//Decorator Pattern
/*
Explanation: Decorator pattern allow us to add functionality to our class
Diagram explanation: We have 4 classes, 2 of them are abstract

To understand the diagram much better:
Component => Car (abstract)
Decorator => CarDecorator (abstract)
ConcreteComponent => ModelS, ModelX
ConcreteDecorator => EnhancendAutoPilot, RearFacingSeats

Where ConcreteDecorators going to take our car and update them to have more funcs
*/
abstract class Car {
  public description: string;
  public getDescription(): string {
    return this.description;
  }
  public abstract cost(): number;
}

class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public description = "Model X";
  public cost(): number {
    return 77000;
  }
}

abstract class CarDecorator extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
  public abstract cost(): number;
}

class EnhancendAutoPilot extends CarDecorator {
  decoratedCar: Car;
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription() + `, Enhanced AutoPilot`;
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarDecorator {
  decoratedCar: Car;
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }
  public getDescription(): string {
    return this.decoratedCar.getDescription() + `, Rear facing seats`;
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

// EXAMPLE
let myTesla = new ModelS();
// Adding new func
myTesla = new EnhancendAutoPilot(myTesla);
// Adding another func
myTesla = new RearFacingSeats(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
