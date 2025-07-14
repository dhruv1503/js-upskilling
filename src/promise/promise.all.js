
// promise.all takes a list of promises and returns a list of results whether passed or failed
// It is a fulfilled fromise when all promises are a success and returns their results in an array
// It is rejected, when even if one promise is rejeted., returns the reson along side the rejection
function promiseAll(promiseList) {
    const results = []
    let promisesCompletedCount = 0
    return new Promise((resolve, reject) => {
        const resultList = promiseList.map((promise, index) => {
            promise.then((data) => {
                // on resolution add it to results
                results[index] = data
                // increase promisesCompletedCount by 1;
                promisesCompletedCount += 1;
                // if promisesCompletedCount equals length of promises provided, quit resolve it with array of results
                if (promisesCompletedCount === promiseList.length) {
                    resolve(results)
                }
            })
                .catch((error) => {
                    reject(error)
                })

        })
    })

}