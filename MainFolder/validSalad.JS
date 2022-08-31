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