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
  
  // i have used same variables so comment out rest code before executing particular question
  
  
  function findCard(value, suit) {
    for (let i = 0; i < cardData.length; i++) {
      let p = cardData[i].suit;
      val = cardData[i].value;
      if (p === suit && val === value) return true;
    }
   
    return false;
  }
  
  let suit = "club";
  let value = 10;
  let op = findCard(value, suit);
  console.log(op);
  
  /** * 1. complete the above function,
   * it should return true /false if card is present/absent
   * example
   * findCard(5, 'heart') should return false
   * findCard(10, 'club') should return true
   */
  
  // =============================================== 2 ================================================ //
  
  let x = [];
  let temp;
  
  function getSuits(cardData) {
    // write your code here
  
    for (let i = 0; i < cardData.length; i++) {
      temp = cardData[i].suit;
      x.push(temp); //stored value of suit in variable x which consist duplicate elements.
    }
  }
  getSuits(cardData);
  
  //
  function remove_duplicate(x) {
    for (let j = 0; j < x.length; j++) {
      for (let k = j + 1; k < x.length; k++) {
        if (x[j] === x[k]) {
          x.splice(k, 1); //removed duplicates from element x and gor unique value of suit
        }
      }
    }
    console.log(x);
  }
  remove_duplicate(x);
  
  /**
      2. write a function which returns the list of available suits in the above data
   * ans => ["heart", "club", "diamond"]
  */
  
  // ================================================ 3 =============================================== //
  
  
  
  function getSuitCount(cardData) {
  
  let arr = {}
  const akki = cardData.forEach(function(item){
  
  arr[item.suit] ? arr[item.suit]++ : arr[item.suit] = 1
  });
  console.log(arr);
  }
  
  console.log(getSuitCount(cardData));
  
  
    // write your code here
  
  
  // /**
  //  * 3. write a function which returns an object with the suits as its key and its total count as its value
  //  * ans => {  heart:1,  club:3, diamond:2,}
  // */
  
  // // ================================================= 4 ============================================== //
  
  // function getSuitValues(cardData) {
  //     // write your code here
  // }
  
  /**
   *  4. write a function which returns an object with the suits as its key and its available values as value
   *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]}
   *
   */
  
  function getSuitCount(cardData) {
   
  
    let extract_s;
    let extract_v;
  
    let sam = {};
  
    for (let i = 0; i < cardData.length; i++) {
      (extract_s = cardData[i].suit), (extract_v = cardData[i].value);
  
      if (extract_s in sam) {
        sam[extract_s].push(extract_v);
      } else {
        sam[extract_s] = [extract_v];
      }
    }
    console.log(sam)
  }
  // getSuitCount(cardData);