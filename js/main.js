"use strict"

const list = [
    'Acqua',
    'Uova',
    'Olio',
    'Mozzarelle',
    'Pomodori',
    'Pane'
];

let i = 0

const shopping_list = document.getElementById('lista')

while (i < list.length) {
    console.log(list[i]);
    
    const listItem = document.createElement("li");
    
    listItem.innerHTML = list[i];
    shopping_list.append(listItem);
    console.log(listItem);
    i++
}