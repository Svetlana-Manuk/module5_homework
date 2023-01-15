const result = +prompt("Введите число", " ")
if (typeof result !== 'number') {
    console.log ('Упс, кажется, вы ошиблись')
}
else if (isNaN (result)) {
    console.log ('Ошибка, введено не число')
}
else if (result % 2 == 0) {
    console.log ('Число четное')
}
else {
    console.log ('число нечетное')
}

