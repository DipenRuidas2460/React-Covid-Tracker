class NewStudents {
    constructor(name, age, cls) {
        this.myName = name
        this.myAge = age
        this.myCls = cls
    }
    newBioData() {
        return `I am ${this.myName}, My age is ${this.myAge} and Class is ${this.myCls}`
    }
}

class NewPlayer extends NewStudents {
    constructor(name, age, cls, game) {
        super(name, age, cls)
        this.myGame = game
    }
    game() {
        return `${super.newBioData()}. I am a player of ${this.myGame}`
    }
}

let obj = new NewPlayer("Namita Ruidas", 42, "10th pass", "cooking")

// console.log(obj.game())



// Practice-1

class Students {
    constructor(name, cls, age) {
        this.myName = name
        this.myCls = cls
        this.myAge = age
    }
    bioData() {
        return `I am ${this.myName}, My age is ${this.myAge} and class is ${this.myCls}`
    }
}
class Player extends Students {
    constructor(name, cls, age, game) {
        super(name, cls, age)
        this.myGame = game
    }
    game_bio() {
        return `${super.bioData()}. My favorite game is ${this.myGame}`
    }
}

let obj1 = new Player("Dipen Ruidas", "B.Tech", 26, "Cricket")
// console.log(obj1.game_bio());


// contructor function:-

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance
    this.deposit = (amount) => {
        this.balance += amount
    }
    this.withdraw = (amount) => {
        this.balance -= amount
    }
}

let dipenAccount = new BankAccount("Dipen Ruidas", 1000)   // instance
let anitaAccount = new BankAccount("Anita Ruidas")
dipenAccount.deposit(5000)
anitaAccount.deposit(1000)
dipenAccount.withdraw(2000)
anitaAccount.withdraw(500)
// console.log(dipenAccount);
// console.log(anitaAccount);


// prototype

function bankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.balance = balance
}

let durgaAccount = new bankAccount("Durga Ruidas", 2000)   // instance
let ajoyAccount = new bankAccount("Ajoy Ruidas", 1800)

bankAccount.prototype.deposit = function (amount) {
    this.balance += amount
}

bankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount
}

durgaAccount.deposit(100)
ajoyAccount.withdraw(800)
// console.log(durgaAccount);
// console.log(ajoyAccount);


// class:--

class bankAcc {
    constructor(customerName, balance = 0) {
        this.customerName = customerName
        this.balance = balance
    }
    deposit(a) {
        this.balance += a
    }
    withdraw(b) {
        this.balance -= b
    }
}

let dipA = new bankAcc("Dipen", 2400)
let gopB = new bankAcc("gopal")

dipA.withdraw(600)
gopB.deposit(600)

// console.log(dipA);
// console.log(gopB);


// Inheritance:- constractor chaining:-

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
    // #calculateIn(amount) {
    //     console.log('Calculating Interest of :- ' + amount);
    // }
    // takeBussinessLoan(amount) {
    //     this.#calculateIn(amount)
    //     console.log('Taking bussiness loan :- ' + amount);
    // }
}

let dipen = new Bank("Dipen", 700)
// dipen.setBalance(400)
// console.log(dipen.getBalance());
// dipen.balance = 800
// console.log(dipen.balance);
// console.log(dipen);

let acc1 = new CurrentAccount("Dipen Das", 18000)
// acc1.takeBussinessLoan(5000)
// console.log(acc1.balance);
// console.log(acc1);



// Polymorphism:-

class A {
    constructor(name) {
        this.name = name
    }
    details(){
        return `Employee name ${this.name}`
    }
    
}
class B extends A{
    constructor(name,salary) {
        super(name)
        this.age = 24
        this.salary = salary
    }
    details(){
        return `Employee name ${this.name}, salary ${this.salary} and age is ${this.age}`
    }
}

class C extends B{
    constructor(name,salary,age,qualification) {
        super(name,salary)
        this.age = age
        this.qualification = qualification
    }
    details(){
        return `Employee name ${this.name}, salary ${this.salary}, age is ${this.age} and qualification is ${this.qualification}`
    }
}

let s1 = new A("Alok")
let s2 = new B("Dipen",50000)
let s3 = new C ("Dipen Das",70000,30,"B.tech in CSE")

// Method overriding 

// console.log(s1.details());
// console.log(s2.details());
// console.log(s3.details());

// Abstraction :- 

class Employee{
    constructor(name,age,baseSalary) {
        this.name = name
        this.age = age
        this.baseSalary = baseSalary
        let monthlyBounus = 1000
        let calculateFinalSalary = function() {
            let finalSalary = baseSalary + monthlyBounus
            console.log("Final salary is:- " + finalSalary);
        }

        this.getEmpDetails = function () {
            console.log('Name:- '+this.name+', age:- '+this.age);
            calculateFinalSalary()
        }
    }
    
}

let emp = new Employee("Dipen",30,2000)
// emp.getEmpDetails()

// Abstruct-class


class Shape{
    constructor(color) {
        if(new.target == Shape) throw new Error("Abstruct class can't be initiated.")
        this.color = color
    }
    get Color(){
        console.log(this.color);
    }
}

class Rectangle extends Shape{
    constructor(color,width,height) {
        super(color)
        this.width = width
        this.height = height
    }
    set col(b){      // setter
        this.color = b
    }
    get Area(){    // getter
        console.log(this.width * this.height);
    }
}

let rect = new Rectangle("Red",40,50)
// let ab = new Shape("Blue")
// console.log(ab);
// ab.Color
rect.Area   // getter 
rect.Color  // getter

rect.col = "Yellow"   // setter
rect.Color


// Static method and Static property:--

class User {
    static id = 1
    static userName = "Dip123"
    static password = "12345"
    static cache = {
        "1": "Some Value"
    }
    constructor(name, age, income) {
        this.name = name
        this.age = age
        this.income = income
        this.id = User.id++
    }
    static {
        console.log("Initilized,","password :- "+User.password);
    }

    static hasInCache() {
        return User.cache
    }

    static compareByAge(user1, user2) {
        return user1.age - user2.age;
    }

    static compareByIncome(user1, user2) {
        return user1.income - user2.income;
    }

    getDetails() {
        console.log("Id:-",this.id, "user Name:- ",User.userName);
        // User.hasInCache()
    }
}

let user1 = new User("Dipen", 26, 5000)
let user2 = new User("Anita", 22, 10000)
let user3 = new User("Ajoy", 24, 4000)

user2.getDetails()

console.log(User.hasInCache())

// let users = [user1, user2, user3]

// console.log(user1, user2, user3);

// users.sort(User.compareByAge)

// users.sort(User.compareByIncome)

// console.log(users);




