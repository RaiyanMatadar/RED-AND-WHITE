// typescriptconvert typescript code into js internally 
// we use it cause so we dont get an unpredictable bugs and error on run time 

// for getting the js file from the typescript we use 
// tsc .\filename.ts 

// for getting the output we use 
// node filename.ts 

// for showing output of ts & getting the js file of the ts 
// tsc typescript.ts; node typescript.js
        
// FROM Sheriyans 

// it will allow us to make our costume rules for the Ts 
// e.g - if we want as 
// var = a; // this should be an error if its not assign

// tsc --init 
// for getting the config file 

// tsc config 
// we can write our costom rule in it 
// if the var isnt use any where in the file then trow error 
// if we didnt assign our var then trow error etc


// tsc --watch 
// if we want an clone of an tsc file but the clone file would have the js file converted 
// and we can see every time we make changes in ts to see how its in js we can use this command 