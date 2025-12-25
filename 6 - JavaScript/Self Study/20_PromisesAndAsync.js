// What is Promise?
// jo bhi task he wo abhi que me lagke compleate nahi hoga (que me lag gaya he ) 
// lekin wo abhi ke abhi load nahi hoga compleate nahi hoga

// 3 states of promises 
// 1) pending 
// 2) fulfilled (resolve) 
// 3) rejected

// consuming promises 
// fetch('https://somthing.com').then().catch().finally() // this isnt an whole promise

// Promise
// Promise is an object (means we need new keyword to get the instance of an object).
// we give Promise an function in it we pass 2 argument as resolve & reject (resolve = success, reject = reject). 
// it also has then() & catch() , finally() // they both take an callback function 

// ------ promiseOne
const promiseOne = new Promise(function(resolve, reject) {
    // async task
    // DB calls, cryptography, network

    setTimeout(function() {
        console.log("async task complete.");
        resolve() // this resolve it nesesary to add as it connect the .then() to it 
    }, 1000);
});

promiseOne.then(function() {
    console.log("promise consumed");
})

// without variable 
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("async task 2 ");
        resolve() // you must call it so you can use the then as then 
            // perform the task after the resolve get completed 
    }, 1000)
}).then(function() {
    console.log("async 2 resolved");
})

// ------ promiseThree
// if the data comes from the network , data come from the file system

// if the data has came so after that we perform the things on it which means we bring data first 
// means resolve has used & also resolve will be used for talking that data from promise thenn passing it to the .then() 
// so after the data came we perform task using .then() in this then() we will perform things on it 
// most of the data that passed are in object form but we can also pass array & function

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "chai", email: "chai@example.com" })
            // we have passed the data here but how we gonna sent it to the then()?
    }, 1000)
})

// as we know that the resolve and then has the connection means when we make this .then(),
// then the then() has already the object which was passed trough the resolve
// inside then() the function paramneter as user become the object whcih was passed in resolve as
// { username: "chai", email: "chai@example.com" }

promiseThree.then(function(user) {
    console.log(user);
    console.log(user.username);
    console.log(user.email);
})

// ------ promiseFour 
// error based checking if the there is an change of an error
// if there is an file of somthing and if the file get the access then we say somthing (.then()) 
// if we dont get the access we say somthing (.catch()) 

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "raiyan", password: "123" })
        } else {
            reject('ERROR somthing went wrong')
        }
    }, 1000)
})


// how to avoid callback hell
promiseFour.then((user) => {
        // here in the user we dont want whole object which was passed from resolve we
        //  only want username btw we can destructure it but we are talking about long scenario 

        console.log(user);
        return user.username // this is must if you want it in the chaining

    })
    .then((username) => {

        // to get the username from the object we chaining 
        // of the .then() to get it  
        // so from the first then we will return the username 
        // means we can get the unsername in this current then()

        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("The promise is eighter resolved or rejected ");
    })

// ------ promiseFive 
const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({ username: "JavaScript", password: "123" })
        } else {
            reject('ERROR : JavaScript went wrong')
        }
    }, 1000)
})

// async & await
// its similar to .then() & .catch()  its uses in the scenario where 
// if the database conneciton didnt happen then we wont move forward  
// await we write it in the format so if the first command get 
// finished then after that thesecond will run 

async function consumePromiseFive() {
    // we use try/catch if we are using async/await else it will give an error
    try {
        const response = await promiseFive // remember Promise are an object thats why we didnt assign it as promiseFive()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// promiseFour & promiseFive are the same just an diffrent way to handle it

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json() // original is comming in string form so convert it into json we use it 
//     console.log(data);
// }

// getAllUsers()

// another way to write getAllUsers()  

fetch('https://jsonplaceholder.typicode.com/users')
    .then((resoponse) => {
        return resoponse.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })


{
    // by chaiAurCode
    // promise.all
    // yes this is also available, kuch reading aap b kro.
}

{
    // By Vikram Sir 
    // Promise.all
    // its take an array if even one promise get rejected it will trow an error

    // promise.allsettled
    // it will return an   array of object

    // promise.any

    // promise.race

    // async function....
    // in this function the opration ehich we are performing operation that performance will become an resolve 
    // means if the opration runs its resolve if the opration doesnt work or get any error the aynce which is noe promise will 
    // get into an catch 

    // aynce await are work together 
    // aasynce is an upgraded version of .then()

}