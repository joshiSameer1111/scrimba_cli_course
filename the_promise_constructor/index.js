/*
Challenge:
1. Get the promise working so it returns “Operation successful!” 
   if it resolves and "Operation failed." if it rejects. 
*/
const promise = () => {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.5

        if (success) {
            resolve("Operation successful!")
        } else {
            reject("Operation failed.")
        }
    })
}

// promise.then(response => console.log(response))

async function runPromise() {
    try {
        const response = await promise()
        console.log(response)
    } catch (err) {
        console.log(err)
    }
}

runPromise()