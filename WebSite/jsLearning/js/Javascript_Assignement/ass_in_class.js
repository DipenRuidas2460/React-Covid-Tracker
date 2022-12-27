const carCompanies = ["Tata","Maruti","Hyundai","Mahindra"]
const carModels = ["Nano","Alto","i10","kuv"]

const carDetails = {}

carCompanies.forEach((element,Index) => {
    carDetails[element] = carModels[Index]
})

console.log(carDetails)

// Output
// const carDetails={
//     "Tata":"Nano",
//     "Maruti":"Alto",
//     "Hyundai":"i10",
//     "Mahindra":"kuv"
// }