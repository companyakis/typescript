//for in

let aboutHer: (number | string)[] = ["Aygün", 33, "Single", 9]

//print index numbers 0, 1, 2, 3

for (let item in aboutHer) {
    console.log(item)
}

//print index numbers and data

for (let index in aboutHer) {
    console.log(`Info_${parseInt(index) + 1}: ${aboutHer[index]}`)
}
/*
Info_1: Aygün
Info_2: 33
Info_3: Single
Info_4: 9
*/
