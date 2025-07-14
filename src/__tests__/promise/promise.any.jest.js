import myPrmoiseAny from "../../promise/promise.any.js";

describe("Polyfill for Promise.any", () => {
    const p1 = () => {
        return new Promise((_, reject) => {
            reject("Fail 1")
        })
    }
     const p2 = () => {
        return new Promise((_, reject) => {
            reject("Fail 2")
        })
    }

    const p3 = () => {
        return new Promise((resolve, _) => {
            resolve("Success!")
        })
    }
    test("returns with one success response, even if others are  failed promises", async() => {
        const data = await myPrmoiseAny([p1, p2, p3]);
        expect(data).toBe("Success!");
     
    });

    test("rejects with AggregateError when all promises fail", async() => {
         expect(myPrmoiseAny([p1, p2])).rejects.toThrow(AggregateError)
    });

    test("returns first fulfilled result as success", async() => {
     const delayedPromise1 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve("success1")
            }, 1000)
        })
     }

      const delayedPromise2 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve("success2")
            }, 50)
        })
     }
     const delayedPromise3 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve("success3")
            }, 100)
        })
     }
     const data = await myPrmoiseAny([delayedPromise1, delayedPromise3, p1, delayedPromise2])
     expect(data).toBe("success2");
    });

})