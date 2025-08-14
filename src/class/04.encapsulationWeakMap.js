const _salary = new WeakMap()

class Employee {
    constructor(name, salary){
        this._name = name;
      _salary.set(this, salary);
    }
    get name(){
        return this._name
    }
    get salary(){
        return _salary.get(this);
    }
    set name(params){
        this._name = params
    }
    set salary(params){
        _salary.set(this, params);
    }

}

const e1 = new Employee("Dhruv", 73000);
const e2 = new Employee("Surbhi", 85000)
console.log(e1)
console.log(e1.name)
console.log(e1.salary)




console.log(_salary);

