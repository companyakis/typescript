//function sayHi(): void

function sayHi() {
    console.log("Hi there!")
}

//explicitly definition

let smartContractLanguage: string

let whichLanguage = (language: string): void => {
    smartContractLanguage = language
    console.log(`We will use language ${smartContractLanguage} in this project.`)
}

whichLanguage('TypeScript') //We will use language TypeScript in this project.

let blockchain: void = undefined

console.log(blockchain) //undefined

