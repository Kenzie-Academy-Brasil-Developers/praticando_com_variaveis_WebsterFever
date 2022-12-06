

let  valorDaCompra = parseFloat(prompt("com quanto em dinheiro voce deseja comprar de gasolina"));
let valorLitro = 6.80;
let litro = valorDaCompra / valorLitro;
var quantidadeDeLitroArredonda = parseFloat(litro.toFixed(0));
alert(" O Cliente abasteceu : " + quantidadeDeLitroArredonda  + "l")