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