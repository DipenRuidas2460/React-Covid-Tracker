const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //

function findCard(value, suit) {
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        if (card.suit === suit && card.value === value) {
            return true;
        }
    }

    return false;
}

console.log(findCard(10, "club"))
console.log(findCard(5, "heart"))

//  * findCard(5, 'heart') should return false
//  * findCard(10, 'club') should return true

// =========================================== 2 ==================================================== //

function getSuitsList() {
    const suitObject = {};
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        const {suit} = card;
        // this will make sure that duplicates are removed
        suitObject[suit] = 1;
    }
    return Object.keys(suitObject);
}

console.log(getSuitsList());

// ans => ["heart", "club", "diamond"]

// =========================================== 3 ==================================================== //

function getSuitsNumber() {
    const suitObject = {};
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        const {suit} = card;
        if (suitObject[suit]) {
            suitObject[suit] = suitObject[suit] +  1;
        } else {
            suitObject[suit] = 1;
        }
    }
    return suitObject;
}

console.log(getSuitsNumber());

// ans => {  heart:1,  club:3, diamond:2,}

// =========================================== 4 ==================================================== //

function getSuits() {
    const suitObject = {};
    for (let i = 0; i < cardData.length; i++) {
        const card = cardData[i];
        const {suit, value} = card;    // Destructure 
        if(suitObject[suit]){
            // const valueList = suitObject[suit];    //for innar array
            suitObject[suit] = [...suitObject[suit], value];
        }else{
            suitObject[suit] = [value];
        }
    }
    return suitObject;
}

console.log(getSuits());

//  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 