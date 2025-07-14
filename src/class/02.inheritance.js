// so inheritance is a pillar of onpopstate, that minics real life inheritance, Father -> ScreenOrientation, genome, habits, inheritance

// it's udes to keep relation of logic and aviod code duplication

// let's go functional way first, then we'll do class based , incremental


// function createUser(name, email){
//     const obj = Object.create(null);
//     obj.name = name;
//     obj.email = email;
//     obj.getName = function(){
//         return obj.name ;
//     }
//     obj.email = function(){
//         return obj.email;
//     }
//     return obj
// }

// function createPremremUser(name, email, bankBalance){
//  const obj = Object.create(null);
//     obj.name = name;
//     obj.email = email;
//     obj.bankBalance = bankBalance;
//      obj.getName = function(){
//         return obj.name ;
//     }
//     obj.email = function(){
//         return obj.email;
//     }
//     obj.getBankBalance = function(){
//         return obj.bankBalance;
//     }

//     return obj
// }

// const u1 = createUser("Dhruv", "dhruv@email.com");
// const u2 = createPremremUser("Rohit", "rohit@email.com", 5000);

// console.log(u1);
// console.log(u2);

// As we can see there is so many reptition, so can we avoid it? let's do it again;

// function createUser(name, email){
//     const obj = Object.create(null);
//     obj.name = name;
//     obj.email = email;
//     obj.getName = function(){
//         return this.name ;
//     }
//     obj.getEmail = function(){
//         return this.email;
//     }
//     return obj
// }

// function createPremremUser(name, email, bankBalance){
//  const obj = {};
//     obj.name = name;
//     obj.email = email;
//     obj.bankBalance = bankBalance;
//     //  obj.getName = function(){
//     //     return name ;
//     // }
//     // obj.getEmail = function(){
//     //     return email;
//     // }
//     obj.getBankBalance = function(){
//         return bankBalance;
//     }

//     return obj
// }

// in above arrangement, we can only nodify the object, not object creators, like

// const u1 = createUser("Dhruv", "dhruv@email.com");
// const u2 = createPremremUser("Rohit", "rohit@email.com", 5000);
// u2.__proto__.getEmail = function(){
//     return u1.getEmail.call(u2)
// }
// u2.__proto__.getName = function(){
//     return u1.getName.call(u2)
// }
// console.log(u1);
// console.log(u1.getName())
// console.log(u1.getEmail())
// console.log(u2);
// console.log(u2.getEmail())
// console.log(u2.getName())

// now lets modify our preUser Creator to implement inheritance. 
// very primative level of inheritance
// function createPremremUser(name, email, bankBalance){
//     const obj = createUser(name, email);
//     obj.bankBalance = bankBalance;
//      obj.getBankBalance = function(){
//         return this.bankBalance;
//     }
//     return obj;
// }

// before classes functional conmstructors were made // please tell in what ES version did it come
// it is a convention in functions to create class with 1st letter in Upper case [this is caled a constructor function]
// function User(name, email){
//     this.name = name;
//     this.email = email;
    
// }

// // In order to add functions here, we shall use prtottype

// User.prototype.getName = function(){
//     return this.name;
// }

// User.prototype.getEmail = function(){
//     return this.email
// }

// const user1 = new User('Dhruv', "dhruv@email.com");

// console.log(user1);
// // here, first time we get to see constructor named as User with params(name, email) 
// // so now what we can do is? 

// function PremUser(name, email, bankBalance){
// this.name = name;
// this.email = email
// this.bankBalance = bankBalance
// }

// function getBankBalance(){
//     return this.bankBalance
// }
// ====================Wrong Way============================================ 
// PremUser.prototype.getBankBalance = getBankBalance;
// // But we also want User methods, so what we'll do here

// PremUser.prototype = {...User.prototype, ...PremUser.prototype};
// PremUser.prototype.constructor = PremUser;
// ====================Wrong Way============================================ 
// Why because it creates a woring object method, what wee need, is 
// {
//     name : 
//     ...other obj keys
// }
// PremUser.prototype = Object.create(User.prototype) // here now prototype is a new Object and it's prototpye is User.prototype
// PremUser.prototype.constructor = PremUser;
// PremUser.prototype.bankBalance = getBankBalance
// const premUser1 = new PremUser("Dhruv", "dhruv@email.com", 5000)

// console.log(premUser1) // But why did, contructor function of premUser dissapear from objects proto?

// console.log(premUser1.__proto__)


// Now taking it further to class based

// class User {
//     constructor(name, email){
//      this.name = name;
//      this.email = email;
//     }
//     getName(){
//         return this.name
//     }
//     getEmail(){
//         return this.email
//     }
   
// }

// class PremUser extends User {
//     constructor(name, email, bankBalance){
//    super(name, email)
//    this.bankBalance = bankBalance
//    }
//    getBankBalance(){
//     return this.bankBalance
//    }

// }

// const u1 = new User("Dhruv", "dhruv@email.com");

// const u2 = new PremUser("Deepak", "deepak@email.com", 50000)

// console.log(u1);

// console.log(u2);


// ==== Assessment ===== 

/** This is a class that reprsents account,
 * @class Account
 */
class Account {
    /**
     * 
     * @param {string} accountHolderName 
     * @param {number} accountNumber 
     * @param {number} balance 
     */
   
    static bank = "State Bank of Javascript";
    constructor(accountHolderName, accountNumber, balance){
     this.accountHolderName = accountHolderName;
     this.accountNumber = accountNumber;
     this.balance = balance;
  
    }
    /**
     * @param {undefined} "No params required"
     * @returns {string} `Account: <name> | Number: <number> | Balance: <balance>`
     */
    getDetails(){
      return `Account: ${this.accountHolderName} | Number: ${this.accountNumber} | Balance: ${this.balance}`
    }
    static getBankName(){
        return this.bank
    }
}

// const user1 = new Account('Test', 1234, 5000);

// console.log(user1)
// console.log(Account.getBankName())

class SavingAccount extends Account {
    /**
     * 
     * @param {string} accountHolderName 
     * @param {number} accountNumber 
     * @param {number} balance 
     * @param {number} interestRate 
     */
constructor(accountHolderName, accountNumber, balance, interestRate){
    super(accountHolderName, accountNumber, balance);
    this.interestRate = interestRate;
}

/**
 * 
 * @returns {number} Interest rate
 */
calculateInterest(){
    return  this.balance * (this.interestRate / 100)
}

/**
 * 
 * @returns {string}
 */
getDetails(){
    return `SavingAccount: ${this.accountHolderName} | Balance: ${this.balance} | Interest: ${this.interestRate}%`
}
}


class NRIAccount extends SavingAccount {
    constructor(accountHolderName, accountNumber, balance, interestRate, country){
        super(accountHolderName, accountNumber, balance, interestRate);
        this.country = country;
    }
    getCountry(){
        return this.country;
    }

    getDetails(){
        return `NRIAccount: ${this.accountHolderName} from ${this.country} | Balance: ${this.balance} | Interest: ${this.interestRate}%`
    }
}


// Tests
const acc = new Account("Dhruv", "JS123", 10000);
const savAcc = new SavingAccount("Deepak", "JS456", 20000, 5);
const nriAcc = new NRIAccount("Alex", "JS789", 50000, 4, "USA");

console.log(Account.getBankName()); // State Bank of JavaScript correct
console.log(savAcc.calculateInterest()); // 1000 correct
console.log(nriAcc.getCountry()); // USA correct

// Now Counter
// for function 

