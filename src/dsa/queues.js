// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(item) {
//     this.items.push(item);
//   }

//   dequeue() {
//     return this.items.shift();
//   }
//   front() {
//     return this.items[0];
//   }
//   rear() {
//     return this.items[this.items.length - 1];
//   }
//   size() {
//     return this.items.length;
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   reverse() {
//     let i = 0,
//       j = this.items.length - 1;
//     while (i < j) {
//       const temp = this.items[i];
//       this.items[i] = this.items[j];
//       this.items[j] = temp;
//       i++;
//       j--;
//     }
//     return this.items;
//   }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue);

// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(item) {
//     this.stack.push(item);
//   }
//   pop() {
//     return this.stack.pop();
//   }

//   isEmpty() {
//     return this.stack.length === 0;
//   }
//   peek(){
//     return this.stack[this.stack.length - 1]
//   }
// }

// function createStack(queue, stack) {
//   if (!queue.isEmpty()) {
//     const item = queue.dequeue();
//     stack.push(item);
//     createStack(queue, stack);
//   }
//   return stack;
// }

// function reverseQueue(queue) {
//   const stack = new Stack();
//   createStack(queue, stack);
//   while (!stack.isEmpty()) {
//     queue.enqueue(stack.pop());
//   }
//   return queue;
// }

// console.log(reverseQueue(queue));

// class QueueWithStack {
//   constructor() {
//     this.stack1 = new Stack();
//     this.stack2 = new Stack();
//   }
//   enqueue(item) {
//     this.stack1.push(item);
//   }
//   isEmpty() {
//     return this.stack1.length === 0;
//   }
//   dequeue() {
//     while (!this.stack1.isEmpty()) {
//       this.stack2.push(this.stack1.pop());
//     }
//     const removedItem = this.stack2.pop();
//     while (!this.stack2.isEmpty()) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return removedItem;
//   }
//   peek() {
//     while (!this.stack1.isEmpty()) {
//       this.stack2.push(this.stack1.pop());
//     }
//     const headItem = this.stack2.peek();

//     while (!this.stack2.isEmpty()) {
//       this.stack1.push(this.stack2.pop());
//     }
//     return headItem;
//   }
// }

// const q = new QueueWithStack();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q.dequeue()); // 1
// console.log(q.peek());    // 2
// console.log(q.isEmpty()); // false




/**
 * @class CircularQueues
 * CircularQueues are fixed length queues
 * it should add items as it does
 */
class CircularQueue {
     
    constructor(length){
        this.placeholder = Symbol('placeholder')
        this.items = new Array(length).fill(this.placeholder);
        this.front = length - 1;
        this.tail = length - 1
    }

    enqueue(item){
     if(this.size() === this.items.length){
        throw new Error("Maximum Queue size exceeded.")
     }
      for(let i = this.items.length - 1; i >= 0; i--){
        if(this.items[i] == this.placeholder){
            this.items[i] = item;
            break;
        }
      }
    }

    dequeue(){
        if(!this.size()){
            throw new Error("Minimum Queue size reached.")
        }
         for(let i = this.items.length - 1; i >= 0; i--){
        if(this.items[i] != this.placeholder){
            this.items[i] = this.placeholder;
            break;
        }
      }
    }

    size(){
       let count = 0
       this.items.forEach((item) => {
          if(item == this.placeholder){
             count++
          }
       })
       return this.items.length - count;
    }
}


const cq1 = new CircularQueue(5);

console.log(cq1.items);
console.log(cq1.size())
cq1.enqueue(1);
cq1.enqueue(2);

cq1.enqueue(4);
cq1.enqueue(7);
cq1.enqueue(111);
cq1.dequeue()
console.log(cq1.items)