//Chapter 15 to 20 Practice
alert("Welcome");
var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];  //array practice
console.log(cities[5]);

var intArr = [23, 45, 67];
intArr.pop();
intArr.push(22);
console.log(intArr);

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
var cityToCheck="Cheyenne"
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities"); } }

 var numElements=1
 var numElements = cleanestCities.length;
 var matchFound = false;
 for (var i = 0; i < numElements; i++);{
 if (cityToCheck === cleanestCities[i]) {
 matchFound = true;
 alert("It's one of the cleanest cities");
 }
 }
 if (matchFound === false) {
 alert("It's not on the list");
 }