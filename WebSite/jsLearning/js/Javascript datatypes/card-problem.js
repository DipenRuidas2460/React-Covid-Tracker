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
        if (cardData[i].suit === suit && cardData[i].value === value) {
            return true
        }
        
    }
    return false
  
}
console.log(findCard(1, 'club'))

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) {
    let arr1 = []
    for (let i = 0; i < cardData.length; i++) {
        arr1.push(cardData[i].suit)
    }

    return arr1

}
console.log(getSuits(cardData))
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount(cardData) {
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    for (let i = 0; i < cardData.length; i++) {

        var ans3 = {}
        if (cardData[i].suit === "heart") {
            count1++;
        }
        else if (cardData[i].suit === "club") {
            count2++;
        }
        else if (cardData[i].suit === "diamond") {
            count3++;
        }
    }
    ans3.heart = count1;
    ans3.club = count2;
    ans3.diamond = count3;
    return ans3
}
console.log(getSuitCount(cardData))
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    let ans4 = {}
    let ansarr1 = []
    let ansarr2 = []
    let ansarr3 = []
    for (let i = 0; i < cardData.length; i++) {
        if (cardData[i].suit === "heart") {
            ansarr1.push(cardData[i].value)
        }
        else if (cardData[i].suit === "club") {
            ansarr2.push(cardData[i].value)
        }
        else if (cardData[i].suit === "diamond") {
            ansarr3.push(cardData[i].value)
        }
    }
    ans4.heart = ansarr1;
    ans4.club = ansarr2;
    ans4.diamond = ansarr3;

    return ans4;
}
console.log(getSuitValues(cardData))

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/




