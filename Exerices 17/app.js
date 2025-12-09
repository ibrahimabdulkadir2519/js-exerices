// 1. Write an `else if` statement that logs:
//     - "Very cold" if the temperature is below 0,
//     - "Cold" if the temperature is between 0 and 15,
//     - "Warm" if the temperature is between 15 and 25,
//     - "Hot" if the temperature is above 25.

let temperature = 20; 

if (temperature < 0) {
   console.log("Very cold");
}else if (temperature >= 0 && temperature < 15) {
   console.log("Cold");
}else if (temperature >= 15 && temperature <= 25) {
   console.log("Warm");
}else{
   console.log("Hot");
}