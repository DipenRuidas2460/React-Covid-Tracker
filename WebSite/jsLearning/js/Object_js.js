const person={
    name:"Dipen",
    gender:"male"
}
// person.name="Ajoy"
// delete person.gender

person.age = 25
person.like = ["music","sports","movie"]
person.address = {
    city:"Asansol",
    country:"India",
    pin:713378
}
person.like[1] = "Dance"
console.log(person)
console.log(person.like[1])
console.log(person.address.city)
person.address.city="kolkata"
console.log(person.address.city)

//console.log(person.name) // dot notation
//console.log(person["gender"])//bracket notation

// bracket notation is used where key name is stored in variable
const d = person["gender"]
console.log(d)

const facebookData=[
    {
        n:"Raju",
        n:"Dipen",
        a:26,
        ge:"male"
    },
    {
        n:"Shyam",
        ag:27,
        ge:"male"
    },
    {
        n:"Rahim",
        ag:29,
        ge:"male" 
    }
]

console.log(facebookData)
console.log(facebookData.toString())

const k = facebookData[1].n
console.log(k)


const man={
    fullName:"Dipen",
    city:"Raniganj",
    age:25
}
const f=Object.keys(man)
console.log(f)
const g=Object.values(man)
console.log(g)

const personCopy = {...man}
console.log(personCopy)

const a = {
    abc:2
}
const b = {
    efg:4
}
const c = {
    ...a,
    ...b
}
console.log(c)


// Destructure

const {fullName,age,city} = man
console.log(fullName, city, age)



// object freeze

const obj = {
    prop:42
}
Object.freeze(obj)
obj.prop = 72
console.log(obj)  // do not execute or change because it is freeze


// object seal  it change the value but not add a new item.
const obj1={
    property:23
}
Object.seal(obj1)
obj1.property="52"
console.log(obj1)