const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// 1.
const [ m, ...h ]= places
console.log("result1=", h)

// 2.
const result = [...morePlaces]
result.unshift("delhi")
console.log("result2=", result)

// 3.
const [k, ...g] = morePlaces
const j = [...places]
j.pop()
const i = g.concat(j)
console.log("result=", i)

// IMPORTANT: Solve all problems using destructuring and rest syntax

		
// ============================================================================= //
// 1.
// remove first element from places array and print the remaining array 
// result = ['gurgaon', 'jaipur', 'pune']


// ============================================================================= //
// 2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']

// ============================================================================= //
// 3.
// take out last three element from the morePlaces Array and take out first three elements from the places array 
// and print the combined array
// result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]



const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }

// const {name,age,gender,address, ...likes} = myData
// 4.
const myPincode = myData.address.pinCode
console.log(myPincode)

// 5.
const myLike = myData.likes[1]
console.log(myLike)
  
// 4.
// destructure and store pincode into a variable named myPincode
  
// 5.
// destructure and store second like into a vaiable named myLike
  