/*Prices for everything

lettuce:
Romanian: 1.30
iceberg: 5.00
Bativia: 2.10
Celtius: 0.69
butterhead: 1.31

fruits:
tomatoe: 0.50
strawberry: 0.50
pineapple: 0.50
kiwi: 0.50
cranberry: 0.50

meats:
chicken: 5.00
steak: 7.00
teriaki: 7.00

*/
let bowlSize
let lettuceType = []
let veggies = []
let fruits = []
let meats = []
let dressing = []
let totalPrice = 0
let finalTotalPrice = 0

function buttonClick(type,which,price) { // Function used to determine if the box that's click is checked and adds the item that is checked to arrays.
    if (type == "size") {
        bowlSize = which
    }
    if (type == "dressing") {
        dressing = which
    }

    if (document.getElementById(which).checked == true) {

        if (type == "lettuceType") {
            lettuceType.push(which)
            totalPrice += price
        }
        else if (type == "veggies") {
            veggies.push(which)
            totalPrice += price
        }
        else if (type == "fruits") {
            fruits.push(which)
            totalPrice += price
        }
        else if (type == "meats") {
            meats.push(which)
            totalPrice += price
        }
    }

    else {

        if (type == "lettuceType") {
            lettuceType.splice(lettuceType.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "veggies") {
            veggies.splice(veggies.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "fruits") {
            fruits.splice(fruits.indexOf(which), 1)
            totalPrice -= price
        }
        else if (type == "meats") {
            meats.splice(meats.indexOf(which), 1)
            totalPrice -= price
        }
    }
    console.log(bowlSize + " " + lettuceType + " " + veggies + " " + fruits + " " + meats + " " + dressing)
    console.log(totalPrice)
}

function calculateTotalPrice() {
    if (bowlSize == "Small") {
        finalTotalPrice = totalPrice
    }
    else if (bowlSize == "Medium") {
        finalTotalPrice = totalPrice * 2
    }
    else if (bowlSize == "Large") {
        finalTotalPrice = totalPrice * 3
    }
    console.log(finalTotalPrice)
}