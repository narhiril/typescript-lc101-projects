"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
var spacecraftName = 'Determination';
var speedMph = 17500;
var kilometersToMars = 225e6;
var kilometersToMoon = 384.4e3;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
//const milesToMars: number = kilometersToMars*milesPerKilometer;
//const hoursToMars: number = milesToMars/speedMph;
//const daysToMars: number = hoursToMars / 24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} days to reach Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
// const getDaysToLocation = function (kilometersAway: number): number {
//     const milesAway: number = kilometersAway*milesPerKilometer;
//     const hoursToLocation: number = milesAway/speedMph;
//     return hoursToLocation / 24;
// }
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to reach Mars.`);
//console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMoon)} days to reach the Moon.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * Spacecraft.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log("".concat(this.name, " would take ").concat(this.getDaysToLocation(location.kilometersAway), " days to reach ").concat(location.name, "."));
    };
    Spacecraft.milesPerKilometer = 0.621;
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to reach Mars.`);
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMoon)} days to reach the Moon.`);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToMoon));
