//2) Escrever um programa em Javascript que lê um conjunto de 4
//valores i, a, b, c, onde i é um valor inteiro e positivo e a,
//b, c, são quaisquer valores reais e os escreva. A seguir:
//a) Se i=1 escrever os três valores a, b, c em ordem crescente.
//b) Se i=2 escrever os três valores a, b, c em ordem decrescente.
//c) Se i=3 escrever os três valores a, b, c de forma que o maior
//entre a, b, c fique dentre os dois.
var i = parseInt(prompt("Digite um valor para i de 1 a 3:"));
var a = parseInt(prompt("Digite outro valor:"));
var b = parseInt(prompt("Digite outro valor:"));
var c = parseInt(prompt("Digite o último valor:"));
var max = 0;
var med = 0;
var min = 0;

if( i === 1) {
}
  if(a < b && b < c && a < c){
    max = c;
    med = b;
    min = a;
    document.body.append(i + "," + min + "," + med + "," + max)
  }
if( i === 2) {
}
  if(a > b && b > c && a > c) {
    max = a
    med = b
    min = c
    document.body.append(max + med + min)
  }
