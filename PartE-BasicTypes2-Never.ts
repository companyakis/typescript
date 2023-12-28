function doesWork(): never {
    console.log("Hi there")
}

doesWork()

let aNumber: number = 200 //a warning". why?

//A function returning 'never' cannot have a reachable end point.
