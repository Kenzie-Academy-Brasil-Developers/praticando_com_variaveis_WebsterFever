
let  temperaturafahrenheit = parseFloat(prompt("informe uma temperatura em farenheit"));

let  temperaturaCelsius = ((temperaturafahrenheit - 32) * 5) / 9
 let temperaturaCelsiusArredonda = parseFloat(temperaturaCelsius.toFixed(4));

alert( " O valor " + temperaturafahrenheit + "ºf em celcius é : " + temperaturaCelsiusArredonda)