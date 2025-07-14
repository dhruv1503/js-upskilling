// Promise.allSetlled()
// This function takes a list of promises, where all promises are fired and it returns an array of object with status and reason(rejected)/value(fulfilled)
// returned object looks like [{status: "rejected", reason : "Network Error"}, {status : "fulfilled", value: api response}]



function myPromiseAllSettled(promiseList){
const result = [];
let count = 0;
return new Promise((resolve) => {
    promiseList.forEach((promise, index) => {
        Promise.resolve(promise).then((value) => {
        result[index] = {status : "fulfilled", value}
        }).catch((reason) => {
            result[index] = {status : "rejected", reason}
        }).finally(() => {
            count += 1;
          if (count === promiseList.length) {
            resolve(result);
          }
        })
    })
})
}

myPromiseAllSettled([
  Promise.resolve({name : "Dhruv", age: 28, profession : "Software Developer"}),
  Promise.reject("fail"),
  42,
]).then(console.log);