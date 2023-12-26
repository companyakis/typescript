//numeric enums

enum PeopleHere {Mustafa, Bilge, Kultigin, Kutluk}

let mustafaID: PeopleHere = PeopleHere.Mustafa

console.log(mustafaID) //0

enum PeopleHere2 {Mustafa = 5, Bilge, Kultigin, Kutluk}

let mustafaIDNew: PeopleHere2 = PeopleHere2.Mustafa

let bilgeIDNew: PeopleHere2 = PeopleHere2.Bilge

console.log(mustafaIDNew) //5

console.log(bilgeIDNew) //6
