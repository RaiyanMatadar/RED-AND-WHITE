# How an API Works (Short & Clear Notes)

## Basic Flow

1. Your app sends a **request** to an API
2. The API checks your **API key**
3. The server **processes** your request
4. The API sends back a **response** (usually in JSON format)
5. Your app **uses the data**

**In short:**
API = request → process → response

---

## What an API key really means

An **API key** is like a password for your app.
It tells the API server:

* who is using the service
* whether they are allowed
* how many requests they have used

APIs use this to:

* control access
* apply limits (for example, 1000 requests per day)
* prevent abuse

---

## Why we use APIs

APIs let you use **existing services** instead of building everything from scratch.

### Example

If you are building an Uber-like app:

* You do NOT build your own maps system
* You use **Google Maps API**
* You get maps, routes, and locations instantly

This saves:

* time
* money
* effort

---

## How you find and use an API

When you need a feature, you search for its API.

Example searches:

* weather API
* movie database API
* maps API

Most APIs are used through a **URL** like this:

```
http://www.omdbapi.com/?apikey=YOUR_KEY&t=Inception
```

Here:

* `apikey` = your identity
* `t=Inception` = what data you want

---

## What “request” actually means

A **request** is when your app asks the server for something.

Example:
Your frontend asks:

> “Give me details of the movie Inception.”

That message sent to the API = **request**
The data you get back = **response**

---

## Final definition

An API is a system that lets one program talk to another by sending **requests** and receiving **responses**, and an API key is what proves who is making those requests.
