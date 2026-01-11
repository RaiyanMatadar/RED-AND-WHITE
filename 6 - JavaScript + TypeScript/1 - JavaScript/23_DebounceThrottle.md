Debounce & Throttle 

when we type in search engine as
Hard 

we usually made an program which call API for each keyword

H
HA
HAR
HARD 
HARD J
HARD JS

but this way isnt good for performance level we cna also do as 
we can make an button when the user finishes typing then then user will 
click on botton then the API will fetch the data based on the input but this 
will break the UX

if the user is wirting then dont bring data for every keyword we can do it as when 
the user made any delay in typing then the data should appear means API will fetch 
this is called Debouncing 

How debouncing work

H        "H is pressed" → debounce timer STARTS (API call NOT executed yet)
HA       "A is pressed" → previous timer CANCELLED, new debounce timer STARTS
HAR      "R is pressed" → previous timer CANCELLED, new debounce timer STARTS
HARD     "D is pressed" → previous timer CANCELLED, new debounce timer STARTS
HARD J   user PAUSES typing → debounce delay COMPLETES → API call EXECUTES with "HARD"
HARD JS  user types again → new debounce timer STARTS (previous execution already done)


Debounce:
- Debouncing cancels timers on every input and 
  runs the API call only after the user stops 
  typing for the full delay.
- Best for search, typing, API calls
- Not for scroll or continuous events

```js
function debounce(fn,delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args);
        },delay)
    }
}

const search = (query) => {
    console.log(`search for`, query);
};

const searchWithDebounce = debounce(search,1000);

searchWithDebounce("HARD JS");
searchWithDebounce("HARDs JS");
searchWithDebounce("HARDx JS");
searchWithDebounce("HARDc JS");
searchWithDebounce("HARDz JS interview");

```

Throttle 
an small girl ask her mother im hungry mom said food will be cooked in 10min
girl said im hungry again but its still only 2min passed so mom is quite cause 
food isnt ready so the girl will get the food only after 10min dosnt matter 
how many time she asked for the food 

1min -- X (ingoned)
3min -- X (ingoned)
6min -- X (ingoned)
10min -- true

```js 
function throttle(fn,delay){
    let lastCall = 0;

    return function(...args){
        const now = Date.now()
        if (now - lastCall < delay){
            return;
        }
        lastCall = now;
        return fn(...args);
    };
} 

function sendChatMessage(message){
    console.log("sending message",message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage,2 * 1000);