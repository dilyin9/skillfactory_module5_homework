let message = prompt('Введите значение');
let n;
if (typeof +message == 'number') {
  n = (message % 2 == 0) ? "Четное" : "Нечетное";
}
else {
  n = "Упс, кажется, вы ошиблись";
}
console.log(n)