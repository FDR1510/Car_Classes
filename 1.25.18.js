//Create a function that creates car objects which have a make, model year, and color.
//Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.
//Challenges:
//Write a function that creates an object that represents a car with the following properties:
//model year
//make
//color
//Add a function to the object that is being returned that concatenates the make, year and color.

var = carDATA = {

}

function createNewCar (carMake, carModel, carYear, carColor) {
  return {
  make: carMake,
  model: carModel,
  year: carYear,
  color: carColor,
  allCarData: function () {
    return this.make + " " + this.model + " " + this.year + " " + this.color
  }
  }
}

var car1 = createNewCar("nissan","altima",2018,"green")

car1.allCarData()
// "nissan altima 2018 green" will print when line 28 is called


// ========================================challenge 2 ============================================

//Take your Password Checker and write in code that will notify the user when they have entered a non-valid user name and password.
// Tasks:
//
// For each criteria create a function that checks the string for the password or username and returns one of two objects.
//
// Either { valid: true } or { valid: false, reason: "User ID cannot contain $"} with the reason for the rule failing.
// Then create a main function that runs all functions and prints out all failures for all criteria one at a time.

function logOn(){
  var credentials = {
    pass: "",
    id: ""
  }
  // the below register function is taking in a user ID via prompt and screen it against the while condition
  // until it meets said criteria... same for user Pass
    function registration (){
      credentials.id = prompt("Create a User Id.")
      while (credentials.id.length < 9 || credentials.id.includes("$")) {
        credentials.id = prompt("This User Name is less than 9 characters or contains an unapproved symbol ($).")
      }
      //this while loop will screen the credentials.id for characters
      credentials.pass = prompt("Create a password.")
      while (credentials.pass.length < 9) {
        credentials.pass = prompt("This password contains less than 9 characters.")
      }
}
// this function is taking in new entries for both the User Id and Password and checking them against the above
// registered values
    function signIn (){
      var idEntry = prompt("Enter your User ID.")
      while (idEntry !== credentials.id) {
        idEntry = prompt ("This is not the correct ID.")
      }
      var passEntry = prompt("Enter you Password.")
      while (passEntry !== credentials.pass) {
        passEntry = prompt("This is not the correct Password.")
      }
    }
    registration()
    signIn()
// this is simply creating an object with our new user credentials and printing them back to us for confirmation
    var finaluser = {
      userid: credentials.id,
      userpass: credentials.pass
    }
    return finaluser.userid + " <-- this is your username " + finaluser.userpass + " <-- this is your password"
}
