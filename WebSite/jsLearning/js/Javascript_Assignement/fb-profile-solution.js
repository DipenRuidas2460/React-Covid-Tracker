
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

// ========================== 0 =========================================== //

function profileLookup(name, property) {
    for (let i = 0; i < facebookProfiles.length; i++) {
        const profile = facebookProfiles[i];
        if (profile.firstName === name) {
            return profile[property] ? profile[property] : "no such property";
        }
    }

    return "person does not exist";
}

console.log(profileLookup("Pritesh","number"))

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ==========================1 =========================================== //

// method 1
function getNamesFromGurgaon() {
    const result = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        const person = facebookProfiles[i];
        if (person.address.location === "gurgaon") {
            //Edge case: when last name is not present
            const name = person.firstName + " " + (person.lastName || "");
            result.push(name);
        }
    }
    return result;
}
console.log(getNamesFromGurgaon())
// complete the above function such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// method 2
const fullNames = facebookProfiles
    .filter((person) => person.address.location === "gurgaon")
    .map((person) => person.firstName + " " + (person.lastName || ""));


console.log(fullNames);




// ============================== 2 ======================================= //

//method 1
function findName(stateName) {
    let name = "person not found"

    for (let i = 0; i < facebookProfiles.length; i++) {
        const person = facebookProfiles[i];
        const { address, firstName, lastName } = person;
        if (address.state === stateName) {
            name = firstName + " " + (lastName || "");
            break;
        }
    }

    return name
}
console.log(findName("haryana"))

// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents


//method 2
function findFullName(stateName) {
    const person = facebookProfiles.find(person => person.address.state === stateName);

    //using ternary
    return person
        ? person.firstName + " " + (person.lastName || "")
        : "person not found";

    //using if else
    // if (person) {
    //   return person.firstName + " " + person.lastName
    // } else {
    //   return "person not found"
    // }
}

console.log(findFullName("haryana"))
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

// ============================== 4 ======================================= //

function printNamesUpdated() {
    const nameArr = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        const { firstName, lastName } = facebookProfiles[i];
        const fullName = firstName + " " + (lastName || "");
        nameArr.push(fullName);
    }
    return nameArr 
}
console.log(printNamesUpdated())

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]

// ================================5 ===================================== //

function printLikesUpdated() {
    let likesArr = [];
    for (let i = 0; i < facebookProfiles.length; i++) {
        // edge case: a person doesnt have any likes
        const likes = facebookProfiles[i].likes || [];

        // we can use push as well
        likesArr = [...likesArr, ...likes];
    }
    return likesArr;
}
console.log(printLikesUpdated())

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ==============================6 ======================================= //

function problemSix() {
    let name = "not found"
    for (let i = 0; i < facebookProfiles.length; i++) {
        const person = facebookProfiles[i];
        if (person.address.location === "delhi" && person.hasDrivingLicense===true) {
            name = person.firstName + " " + (person.lastName || "");
            break
        }
    }

    return name;
}
console.log(problemSix())

//6. write a function which return the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ==============================7 ======================================= //

function problemSeven() {
    let name = "not found"
    for (let i = 0; i < facebookProfiles.length; i++) {
        const person = facebookProfiles[i];
        if (person.likes.includes("driving") && person.hasDrivingLicense === false) {
            name = person.firstName + " " + (person.lastName || "");
            break
        }             // when access arrays any element use = .includes("driving")
    }
    
    return name;
}
console.log(problemSeven())

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh