function doesWork(): never {
    console.log("Hi there")
}

doesWork()

let aNumber: number = 200 //we see "breakpoint warning". why?

//A function returning 'never' cannot have a reachable end point.
