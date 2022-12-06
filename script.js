let valorDaCompra = parseFloat(
  prompt("com quanto em dinheiro voce deseja comprar de gasolina")
);
let valorLitro = 6.8;
let litro = valorDaCompra / valorLitro;
var quantidadeDeLitroArredonda = parseFloat(litro.toFixed(0));
alert(" O Cliente abasteceu : " + quantidadeDeLitroArredonda + "l");

/* exercicio 2  */

let temperaturaCelsius = parseFloat(
  prompt("informe uma temperatura em grau celcius")
);
let temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5;
alert(
  " O valor " +
    temperaturaCelsius +
    "ºc em Fahrenheit é : " +
    temperaturaFahrenheit
);

/* exercicio 3 */

let temperaturaFahrenheitt = parseFloat(
  prompt("informe uma temperatura em farenheit")
);

let temperaturaCelsiuss = ((temperaturaFahrenheitt - 32) * 5) / 9;
let temperaturaCelsiusArredonda = parseFloat(temperaturaCelsiuss.toFixed(4));

alert(
  " O valor " +
    temperaturaFahrenheitt +
    "ºf em celcius é : " +
    temperaturaCelsiusArredonda
);

/* exercicio 4 */

let compriemnto = parseFloat(prompt("Informe o cumprimento da caixa"));
let largura = parseFloat(prompt("Informe a largura da caixa"));
let altura = parseFloat(prompt("Informe a altura da caixa"));

let volume = compriemnto * largura * altura;

alert("o volume é de : " + volume + "m³");

/*exercicio 5*/

let numero = parseFloat(prompt("Informe um valor"));

let ValorAoQuadarado = numero * numero;

alert("O valor " + numero + " ao quadrado é " + ValorAoQuadarado);

/* exercicio 6 */

let primeiraNota = parseFloat(prompt("Informe a primeira nota"));
let segundaNota = parseFloat(prompt("Informe a segunda nota"));
let terceiraNota = parseFloat(prompt("Informe a terceira nota"));
let quartaNota = parseFloat(prompt("Informe a quarta nota"));
let quintNota = parseFloat(prompt("Informe a quinta nota"));

let somaDasNotas =
  primeiraNota + segundaNota + terceiraNota + quartaNota + quintNota;
let mediaNota =
  (primeiraNota + segundaNota + terceiraNota + quartaNota + quintNota) / 5;

alert(
  "A soma dos valores informados é: " +
    somaDasNotas +
    " e a média das notas é: " +
    mediaNota
);

/*exercicio 7 */

let numero1 = parseInt(prompt("informe o primeiro numero"));

let numero2 = parseInt(prompt("informe o segundo numero"));

let divisao = numero1 % numero2;

alert(
  "O resto da divisão de " + numero1 + " por " + numero2 + " é : " + divisao
);

/* exercicio 8 */

let frase = prompt("informe uma frase");

alert("Este texto tem " + frase.length + " caracteres");

/* exercicio 9  */

let frasee = prompt("informe uma frase");

alert(
  "A primeira letra deste texto é " +
    frasee.charAt(0).toUpperCase() +
    " e última é o " +
    frasee.charAt(frasee.length - 1).toLocaleLowerCase()
);

/* exercicio 10 */

let nome = prompt("informe o nome");
let sobrenome = prompt("informe o sobrenome");
let idade = parseInt(prompt("informe a idade"));
let setor = prompt("informe o setor");
alert(
  "Nome: " +
    nome.toUpperCase() +
    " " +
    sobrenome.toUpperCase() +
    " idade: " +
    idade +
    " Setor: " +
    setor
);
