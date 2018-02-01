
//Hint: Create a class called Car, and create a variable called myCar which contains an object of class Car.


class Car{
  constructor(model, year){
   this.wheels = 4,
   this.model = model,
   this.year = year,
   this.lights = false,
   this.rightTurn = false,
   this.leftTurn = false,
   this.speed = 0
  }

  carInfo(){
    console.log("# of Wheels: "+this.wheels+" Model: "+this.model+" Year: "+this.year+" Lights: "+this.lights+" Right Turn: "+this.rightTurn+" Left Turn: "+this.leftTurn+" Speed: "+this.speed);
  }

  toggleLights(){
    if (this.lights===true){
      console.log("Lights Off");
      return this.light=false
    } else {
      console.log("Lights On");
      return this.lights=true
    }
  }

  leftsignal(){
    if(this.leftTurn === false){
      console.log("Left Turn");
      this.leftTurn = true
      this.rightTurn = false
    } else if (this.leftTurn === true) {
      console.log("No signals");
      return this.leftTurn = false
    }
  }

  rightsignal(){
    if(this.rightTurn === false){
      console.log("Right Turn");
      this.rightTurn = true
      this.leftTurn = false
    } else if (this.rightTurn === true) {
      console.log("No signals");
      return this.rightTurn = false
    }
  }



}

class Tesla extends Car {
  constructor(model, year){
    super(model, year)
  }
  acceleration(){
    this.speed += 10
  }
  braking(){
    if(this.speed > 7){
      this.speed -= 7
    } else {
      this.speed = 0
    }
  }
}
class Tata extends Car {
  constructor(model,year){
    super(model,year)
  }
  acceleration(){
    this.speed += 2
  }
  braking(){
    if(this.speed > 1.25){
      this.speed -= 1.25
    } else {
      this.speed = 0
    }
  }
}
class Toyota extends Car {
  constructor(model,year){
    super(model,year)
  }
  acceleration(){
    this.speed += 7
  }
  braking(){
    if(this.speed > 5){
      this.speed -= 5
    } else {
      this.speed = 0
    }
  }
}

let myTesla1 = new Tesla("T",2012)
let myTesla2 = new Tesla("S",2016)
let myTata1 = new Tata("T",2018)
let myTata2 = new Tata("Feets",2013)
let myToyota1 = new Toyota("Kamry",2015)
let myToyota2 = new Toyota("Runner",2011)

var myCarCollection = [myTesla1,myTesla2,myTata1,myTata2,myToyota1,myToyota2]

// myCarCollection.sort(this.year)
//
// myCarCollection.sort(function(a, b){
//   return a.year < b.year
// })
//
// myCarCollection.sort(function(a, b){
//   return a.model < b.model
// })

myCarCollection.sort(function(a, b){
  if(a.model == b.model){
    return a.year < b.year
  } else {
    return a.model < b.model
  }
})
