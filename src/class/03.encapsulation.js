// // Hiding internal data and logic from the outside world and exposing only a clean public API.
// // we may need to declare private which are not directly accessible, for this in JS we use #
// class Person {
//   #password = undefined;
//   /**
//    *
//    * @param {string} name
//    * @param {string} email
//    * @param {string} password
//    * @param {string} address
//    */
//   constructor(name, email, password, address) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//     this.address = address;
//   }
//   getName() {
//     return this.name;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getAddress() {
//     return this.address;
//   }
//   getPassword() {
//     return this.#password;
//   }

//   setName(name) {
//     this.name = name;
//   }
//   setEmail(email) {
//     this.email = email;
//   }
//   setAddress(address) {
//     this.address = address;
//   }

//   setPassword(password) {
//     this.#password = password;
//   }
// }

// const person1 = new Person("Dhruv", 'dhruv@email.com', "test123", "#address 123, qwerty")

// console.log(person1)
// // console.log(person1.#password) // error => Uncaught SyntaxError: Private field '#password' must be declared in an enclosing class

// console.log(person1.getPassword())

// ASSIGNMENT

class Product {
  #price = 0;
  constructor(price){
    this.#price = price
  }
  get price() {
    return this.#price;
  }

  set price(amount) {
    if (!(typeof amount === "number" && amount >= 0)) {
      throw new Error("Value provided should be a number and greater than 0.");
    }
    this.#price = amount;
  }

  get formattedPrice() {
    return `₹${this.#price.toFixed(2)}/-`;
  }
}

// const p1 = new Product();
// console.log(p1);
// console.log(p1.price);
// p1.price = 100;
// console.log(p1.price);
// console.log(p1.formattedPrice)


// TEST
const p = new Product(500);
console.log(p.price);           // 500  correct
p.price = 800; 
console.log(p.formattedPrice);  // ₹800 correct, better format

p.price = -100; // ❌ should throw // throws error
