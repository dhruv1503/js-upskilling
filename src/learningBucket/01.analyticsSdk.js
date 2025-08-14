// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// function message(){
//     console.log('hello');
// }

// function solve(...stdin) {
//     console.log(stdin)
// 	// write your code here
//     const [fn, count] = stdin;
//     let countCalled = 0;
//     return function called(){
//     if(countCalled === count - 1){
//         countCalled = 0
//         return fn()
//     }
//     countCalled++ 
//     }
// }

// const sampler = solve(message, 3);

// sampler()
// sampler()
// sampler()


class Queue {
    constructor(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }
    enqueue = function(item){
        this.items.push(item);
        this.tail+=1
    }
    dequeue = function(){
        if(this.head === this.tail){
            throw new Error("There are no items in queue to dequeue")
        }
        this.tail-=1;
        return this.items.shift();
        
    }
    size = function(){
        return this.tail;
    }
    list = function(){
        if(this.tail === this.head){
             return ""   
            }
        const result = this.items.reduce((prevValue, currentValue, index) => {
            if(index === this.head){
                prevValue += `( head ) => ${currentValue}`
            }
            else {
                prevValue += ` => ${currentValue}`
            }
            if(index === this.tail - 1){
                prevValue += ` => ( tail )`
            }
            return prevValue
        }, "");
        return result;
    }
}


class SDK extends Queue{
     
     logEvent = function(item){
         this.enqueue(item)
     }
   send = function () {
  let count = 0;
  const size = this.size();
  while (count < size) {
    setTimeout(() => {
      const log = this.dequeue();
      console.log(`Analytics sent ${log}`);
      console.log(this.size());
    }, 1000 * (count + 1));
    count++;
  }
};

     
    
}

const sdk = new SDK();
sdk.logEvent(1)
sdk.logEvent(2)
sdk.logEvent(3)
sdk.logEvent(4)
sdk.logEvent(5)
sdk.logEvent(6)
// sdk.send()
// sdk.list()
sdk.send()








