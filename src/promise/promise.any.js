// Promise.any(), takes an iterable of promises as a parameter
// On success, it is success if any promise in iterated and returns forst success
//  Failture, It turns as failed when all promises are rejected and returns all rejections

function myPrmoiseAny(promises) {
    if (!promises || !Array.isArray(promises) || promises.length === 0) {
        return Promise.reject(new AggregateError([], "Wrong params provided"))
    }
    let counter = 0;
    const results = []
    return new Promise((resolve, reject) => {
        promises.forEach((func, index) => {
            func().then((data) => (resolve(data))).catch((error) => {
                results[index] = error;
                counter += 1;
                if (counter === promises.length) {
                    reject(new AggregateError(results, "All promises are rejected"))
                }
            })

        });
    })
}




export default myPrmoiseAny;