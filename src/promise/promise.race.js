//Promise.race() takes a list of promises amnd returns the first promise that returns from pending state, it can be either fulfillted or rejecteed


function myPromiseRace(promiseList){
return new Promise((resolve, reject) => {
promiseList.forEach((promise) => {
   Promise.resolve(promise).then((data) => (resolve(data))).catch((error) => (reject(error)))
})
})
}