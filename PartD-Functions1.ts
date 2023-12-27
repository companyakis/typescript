function totalBudget(month: string, workDay: number, estimatedFixedPayments: number) : number {
    let unexpectedPayments: number
    if (month.toLowerCase() === "january" || month.toLowerCase() === "february") {
        unexpectedPayments = 3000 
    } else if (month.toLowerCase() === "march") {
        unexpectedPayments = 1000;
    } else {
        unexpectedPayments = 0
    }

    let result: number = workDay * estimatedFixedPayments + unexpectedPayments
    return result
}

let cond1 = totalBudget("APRIL", 17, 2000)

console.log(cond1) //34000

let cond2 = totalBudget("JANuary", 21, 2400)

console.log(cond2) //53400
