const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

function profileLookup(name, property) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].firstName === name && facebookProfiles[i][property]!== undefined) {
            return facebookProfiles[i][property]
            break;
        }
        else if (facebookProfiles[i].firstName === name && facebookProfiles[i][property]=== undefined){
            return "no such property"
        }
       
    }

    return " person does not exist" 

}

console.log(profileLookup("Pritesh", "number"))

//2nd approch

function profileLookup(name, property) {
    const a = facebookProfiles.find(x => x.firstName === name  )
    if(a===undefined){
        return "person does not exist"
    }

    else if(a[property]!==undefined){
        return  a[property]
    }
    else if (a[property]===undefined){
        return "no such property"
    }
    

}
console.log(profileLookup("Pritesh", "number"))
// complete the above function such that when it is called with name and property, then it should return its value
// ex ("Pritesh", "number")
// , then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //
function getNamesFromGurgaon(facebookProfiles) {
    const arrName = []
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "gurgaon") {
            arrName.push(facebookProfiles[i].firstName + " " + (facebookProfiles[i].lastName||"") )

        }

    }
    return arrName
}
console.log(getNamesFromGurgaon(facebookProfiles))

//2nd approch

function getNamesFromGurgaon(facebookProfiles) {
    const Gname = facebookProfiles
                                 .filter(x=> x.address.location === "gurgaon") 
                                 .map(x=>x=x.firstName +" "+(x.lastName ||""))
     return Gname
 }
 console.log(getNamesFromGurgaon(facebookProfiles))

//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function findFullName(stateName) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.state === stateName) {
            return facebookProfiles[i].firstName

        }

    }
}
console.log(findFullName("up"))

//2nd approch



function findFullName(stateName) {
    const d = facebookProfiles.find(x => x.address.state === stateName)
    return (d["firstName"]+" "+ d["lastName"] )
}
console.log(findFullName("up"))



// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //
function getDLStatus(facebookProfiles) {
    const arrDLS = []
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "gurgaon") {
            if (facebookProfiles[i].hasDrivingLicense == true) {
                arrDLS.push(facebookProfiles[i].firstName + '- D/L')
            }
            else {
                arrDLS.push(facebookProfiles[i].firstName + '- N D/L')
            }
        }

    }
    return arrDLS
}
console.log(getDLStatus(facebookProfiles))


//2nd approch


function getDLStatus(facebookProfiles) {
    const GnameHd = facebookProfiles
            .filter(x => x.address.location === "gurgaon")
             .map(x => {
            if (x.hasDrivingLicense === true) {
                return x.firstName + "- D/L"
            }
            else if (x.hasDrivingLicense === false) {
                return x.firstName + "- N D/L"
            }

        })
    return GnameHd

}
console.log(getDLStatus(facebookProfiles))
//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    const arrNameList = []
    for (let i = 0; i < facebookProfiles.length; i++) {
        arrNameList.push(facebookProfiles[i].firstName + " " + (facebookProfiles[i].lastName ||"" ))
    }
    return arrNameList
}
console.log(getFullName(facebookProfiles))


//2nd approch

function getFullName(facebookProfiles) {
    const b = facebookProfiles.map(x=> x = x.firstName+" "+(x.lastName ||""))
    return b
}
console.log(getFullName(facebookProfiles))

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    let allLikes = []
    for (let i = 0; i < facebookProfiles.length; i++) {
        let temp = facebookProfiles[i].likes ||""
        allLikes.push(temp)
    }
    return allLikes
}
console.log(getLikes(facebookProfiles))

//2nd approch

function getLikes(facebookProfiles) {
    const likes = facebookProfiles.map(x=> x = (x.likes) ) 
    return likes.flat()
}
console.log(getLikes(facebookProfiles))



// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].address.location === "delhi" && facebookProfiles[i].hasDrivingLicense === true) {
            return facebookProfiles[i].firstName;
        }
        else {
            return "no such person"
        }
    }

}
console.log(getNameFromDelhiWithDL(facebookProfiles))

// 2nd approch

function getNameFromDelhiWithDL(facebookProfiles) {
    
    const dLT = facebookProfiles.find(x=>x=x.address.location==="delhi"&&x.hasDrivingLicense===true)
    if (dLT===undefined){
        return "no such person"
    }
    else {
        return dLT.firstName
    }
    
}
console.log(getNameFromDelhiWithDL(facebookProfiles))




//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (facebookProfiles[i].likes.includes("driving") === true && facebookProfiles[i].hasDrivingLicense === false) {
            return facebookProfiles[i].firstName
        }
    }
}
console.log(getNameOfDriverWithoutDL(facebookProfiles))


//2nd approch

function getNameOfDriverWithoutDL(facebookProfiles) {
    const d1 = facebookProfiles.find(x=> x= x.likes.includes("driving")=== true && x.hasDrivingLicense === false)
    return d1.firstName
}
console.log(getNameOfDriverWithoutDL(facebookProfiles))
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh



