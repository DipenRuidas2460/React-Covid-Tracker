// contructor function:-

// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName
//     this.accountNumber = Date.now()
//     this.balance = balance

//     this.deposit = (amount) => {
//         this.balance += amount
//     }
//     this.withdraw = (amount) => {
//         this.balance -= amount
//     }
// }

// let accounts = []
// const accountForm = document.querySelector('#accountForm')
// const customerName = document.querySelector('#customerName')
// const balance = document.querySelector('#balance')

// const depositeForm = document.querySelector('#depositeForm')
// const accountNumber = document.querySelector('#accountNumber')
// const amount = document.querySelector('#amount')

// const withdrawForm = document.querySelector('#withdrawForm')
// const accountNum = document.querySelector('#accountnumber')
// const rupee = document.querySelector('#rupee')

// accountForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let account = new BankAccount(customerName.value, +balance.value)
//     accounts.push(account)
//     console.log(accounts);
// })

// depositeForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let account = accounts.find((account) => account.accountNumber === +accountNumber.value)    // +signe is use convert string to integer 
//     account.deposit(+amount.value)
//     console.log(accounts);
// })

// withdrawForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let account = accounts.find((account) => account.accountNumber === +accountNum.value)
//     account.withdraw(+rupee.value)
//     console.log(accounts);
// })



// // prototype

// function bankAccount(customerName, balance = 0) {
//     this.customerName = customerName
//     this.accountNumber = Date.now()
//     this.balance = balance
// }

// let durgaAccount = new bankAccount("Durga Ruidas",1000)   // instance
// let ajoyAccount = new bankAccount("Ajoy Ruidas",1900)

// bankAccount.prototype.deposit = function(amount){
//     this.balance += amount 
// }

// bankAccount.prototype.withdraw = function (amount) {
//     this.balance -= amount
// }

// durgaAccount.deposit(100)
// ajoyAccount.withdraw(800)
// console.log(durgaAccount);
// console.log(ajoyAccount);


// Inheritance:- (constractor chaining:-)

function BnkAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance
}

BnkAccount.prototype.deposit = function (amount) {
    this.balance += amount
}

BnkAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}


function savingAcc(customerName, balance = 0) {
    BnkAccount.call(this, customerName, balance)
    this.transactionLimit = 20000
}

savingAcc.prototype = Object.create(BnkAccount.prototype)

savingAcc.prototype.personalLoan = function (amount) {
    console.log("personal loan is:- " + amount);
}


function currentAcc(customerName, balance = 0) {
    BnkAccount.call(this, customerName, balance)
    this.transactionLimit = 50000
}

currentAcc.prototype = Object.create(BnkAccount.prototype)

currentAcc.prototype.bussinessLoan = function (amount) {
    console.log("Bussiness loan amount:- " + amount);
}


let dipAcc = new savingAcc("Dipen Ruidas", 500)
dipAcc.deposit(600)
dipAcc.withdraw(400)
// dipAcc.personalLoan(40000)
// console.log(dipAcc);



// class inheritance :- 

class BankAcc {
    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.balance = balance
    }
    deposit(a) {
        this.balance += a
    }
    withdraw(b) {
        this.balance -= b
    }
}

class SavingAcc extends BankAcc {
    transactionLimit = 20000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    personalLoan(amount) {
        console.log("Taking personal loan :- " + amount);
    }
}

class CurrentAcc extends BankAcc {
    transactionLimit = 50000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    bussinessLoan(amount) {
        console.log("Taking bussiness loan :- " + amount);
    }
}

let sumAcc = new SavingAcc('suman Das', 800)
let kaluAcc = new CurrentAcc('kalu g', 700)
sumAcc.deposit(200)
kaluAcc.withdraw(200)
// sumAcc.personalLoan(24000)
// kaluAcc.bussinessLoan(74000)
// console.log(sumAcc);
// console.log(kaluAcc);


// Encapsulation :- 

class Bank {
    #balance = 0
    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.accountNumber = Date.now()
        this.#balance = balance           // # is use for privet variable
    }
    deposit(amount) {
        this.#balance += amount
    }
    withdraw(amount) {
        this.#balance -= amount
    }
    set balance(amount) {
        if (isNaN(amount)) throw new Error('Amount is not valid input')
        this.#balance = amount
    }
    get balance() {
        return this.#balance
    }
    // setBalance(amount){
    //     if(isNaN(amount)) throw new Error('Amount is not valid input')
    //     this.#balance = amount
    // }
    // getBalance(){
    //     return this.#balance
    // }
}

class CurrentAccount extends Bank {
    transactionLimit = 90000
    constructor(customerName, balance = 0) {
        super(customerName, balance)
    }
    #calculateIn(amount){
        console.log('Calculating Interest of :- ' + amount);
    }
    takeBussinessLoan(amount){
        this.#calculateIn(amount)
        console.log('Taking bussiness loan :- ' + amount);
    }
}

// let dipen = new Bank("Dipen",700)
// dipen.setBalance(400)
// console.log(dipen.getBalance());
// dipen.balance = 800
// console.log(dipen.balance);
// console.log(dipen);

let acc1 = new CurrentAccount("Dipen Das",18000)
acc1.takeBussinessLoan(5000)
console.log(acc1.balance);
console.log(acc1);