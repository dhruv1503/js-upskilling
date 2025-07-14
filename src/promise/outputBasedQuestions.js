// =======================================================

console.log("start");

Promise.resolve()
  .then(() => {
    console.log("then 1");
    return Promise.resolve("A");
  })
  .then((val) => {
    console.log("then 2", val);
  });

Promise.resolve()
  .then(() => {
    console.log("then 3");
  });

console.log("end");

/**
 * start
 * end
 * then 1
 * then 2 A
 * then 3
 */


// =======================================================


// =======================================================


Promise.resolve("A")
  .then((val) => {
    throw new Error("fail");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch((err) => {
    console.log("Caught:", err.message);
    return "Recovered";
  })
  .then((val) => {
    console.log("Final:", val);
  });

/**
 * Caught:fail
 * Final:Recovered
 */

// =========================================================


Promise.reject("X")
  .then(
    () => console.log("then-success"),
    (err) => console.log("then-failure:", err)
  )
  .catch(() => console.log("catch"));



/**
 * catch
 */


// =========================================================

Promise.resolve("outer")
  .then((val) => {
    console.log(val);
    return Promise.resolve("inner");
  })
  .then((val) => {
    console.log(val);
  });

/**
 * outer
 * inner
 */


// ==========================================================


const p = Promise.resolve();

p.then(() => console.log("A"));
p.then(() => console.log("B"));
p.then(() => console.log("C"));

/**
 * A
 * B
 * C
 */


// =========================================================

Promise.resolve("value")
  .finally(() => {
    return "ignored";
  })
  .then((val) => {
    console.log("Result:", val);
  });


/**
 * No output, reason it might break after finally and then block might not execute
 */


// =========================================================

async function foo() {
  console.log("foo-start");
  await Promise.resolve();
  console.log("foo-end");
}

console.log("start");
foo();
setTimeout(() => console.log("timeout"), 0);
console.log("end");


/**
 * start
 * end
 * <Promise>
 * timeout
 */



// ==========================================================

// new Chanllenge ===========================================


// =============== 1 ==============================


Promise.resolve("start")
  .then((res) => {
    console.log(res);
    return "next";
  })
  .then(console.log)
  .then(() => {
    throw new Error("fail");
  })
  .then(() => console.log("after error"))
  .catch((err) => {
    console.log("Caught:", err.message);
  })
  .then(() => console.log("after catch"));

  /**
   * start
   * Caught:fail
   * after catch
   */


  // ==================== 2 ===========================

  Promise.resolve()
  .then(() => {
    return {
      then: (resolve, reject) => {
        reject("rejected from thenable");
      }
    };
  })
  .then(() => {
    console.log("fulfilled");
  })
  .catch((err) => {
    console.log("caught:", err);
  });

  /**
   * caught: rejected from thenable
   */

  // ==================== 3 ===========================

const ids = [1, 2, 3];

async function printIds() {
  ids.forEach(async (id) => {
    await new Promise((r) => setTimeout(r, 100));
    console.log(id);
  });
}

printIds();

// output will be 
// 1
// 2
// 3
// as they are getting printed syncronously

// ==================== 4 ===========================

Promise.resolve("value")
  .then(() => {
    throw "Boom";
  })
  .then(() => {
    console.log("Success");
  })
  .catch((e) => {
    console.log("Caught:", e);
  });


//**
// Caught:Boom
// 
//  */

// ==================== 5 ===========================


async function test() {
  return "A";
}

test().then((res) => {
  console.log(res);
});

(async () => {
  const val = await test();
  console.log(val);
})();

//**
// A (Normal .then)
// A (IIFE)
//  */


// Challege 3 //


// ============ 1 ==================

let val = 10;

Promise.resolve(val)
  .then((v) => {
    val += 5;
    console.log("then 1:", v);
    return val;
  })
  .then((v) => {
    console.log("then 2:", v);
  });

val += 10;

/**
 * 1.
 * then 1: 25
 * then 2: 25
 * 
 * My reason js came on line let val = 10, then came on promise and sent the promise.resolve to micrtask queue with reference of val
 * then came to last line val += 10, making val = 20, the on resolution, 1st thens callback came into main stack and increased value of value by 5, since new val is not declare vals value increase by 5, hence 1st console
 * then for 2nd console vals value is already 25
 * 
 */

// ============ 2 ==================

Promise.resolve().then(() => {
    console.log("A");
    return Promise.resolve().then(() => console.log("B"));
  })
  .then(() => {
    console.log("C");
  });

  /**
 * 2. 
 * A
 * C
 * B
 * 
 * Promise is sent to micro task queue, on resoltion event look sends .then function to main stack to be executed A is printed.
 * Then then send returned promise to task queue, then 2nd then is printed "C", then B is printed 
 * 
 * 
 */



// ============ 3 ==================

async function task() {
  try {
    await Promise.reject("fail");
  } catch (e) {
    return "caught";
  } finally {
    return "finally";
  }
}

task().then(console.log);

/**
 * 3.
 * finally
 * I don't know why, just seemed right
 */

// ============ 4 ==================
Promise.reject("error")
  .catch((e) => {
    console.log("Caught:", e);
    throw "new error";
  })
  .then(() => {
    console.log("Recovered");
  })
  .catch((e) => {
    console.log("Final Catch:", e);
  });
 /**
  * 4. 
  * Caught:error
  * Final Catch:new error
  * 
  * My explanation, if 1st catch didn't throw error, it would have entered try
  */

 // ============ 5 ==================

 function test() {
  return Promise.resolve("X").then((v) => {
    return v;
  });
}

(async () => {
  const val = await test();
  console.log(val);
})();

/**
 * 5. 
 * v
 * await work here normally, on function invocation test is promed in maub stack, then Promise goes in microtask queue, gets resolved there, then even loop send it to main stack, where .then function is executed
 * 
 * 
 */

 // ============ 6 ==================

 Promise.resolve("done")
  .finally(() => {
    return Promise.reject("fail in finally");
  })
  .then((v) => {
    console.log("Then:", v);
  })
  .catch((e) => {
    console.log("Catch:", e);
  });

  /**
   * 6. 
   * Then: v
   * 
   * According to me finally will get executed at last therefore, rejection will be send in form of error 
   */
