//Prices for everything
meats:
chicken: 2.60
steak:3.00
teriaki:2.20

lettuce:
Romanian: 1.30
iceberg: 5.00
Bativia: 2.10
Celtius: 0.69
butterhead: 1.31

fruits:
tomatoe: .30
strawberry:.80
pineapple: .50
kiwi: .80
cranberry: .20

meats:
chicken: 5.00
steak: 30.00
teriaki: 7.00

dressing:
ceaser: 2.80
buttermilk: 3.00
jalapenio: 2.30
Itlaian: 3.30
let bowlSize, lettuceType, veggies, fruits


function buttonClick(type,which) {
    if (type == "size") {
        bowlSize = which
    }
    else if (type == "lettuceType") {
        lettuceType = which
    }
    else if (type == "veggies") {
        veggies = which
    }
    else if (type == "fruits") {
        fruits = which
    }

    console.log(bowlSize + " " + lettuceType + " " + veggies + " " + fruits)
}