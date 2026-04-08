# What is a Router?

## Main Purpose

A **router's primary job** is to connect your local network to the internet. While a switch connects devices *to each other*, a router connects your entire network *to the outside world*.

---

## How It All Connects

```
Your Computers → Switch → Router → ISP → Internet
```

You connect your **switch to the router**, and then the router connects to your **ISP (Internet Service Provider)** — the company that gives you internet access (like Jio, Airtel, etc.).

![Router Diagram](../how%20does%20the%20internet%20works/assets/what_is_router.png)

---

## Communication Flow Inside a LAN

**Scenario: PC-1 wants to send data to PC-5**

```
PC-1 ──► Switch ──► PC-5
```

> The data never even touches the router — it goes straight through the switch using cables.

**Key point:** Devices on the **same LAN don't need a router** to talk to each other. A switch or access point is enough.

---

## Communication Flow to the Internet

**Scenario: PC-1 wants to send data to the internet**

```
PC-1 ──► Switch ──► Router ──► ISP ──► Internet
```

This time, the packet travels all the way from your switch, through the router, out to your ISP, and then onto the internet.

![ISP Connection](../how%20does%20the%20internet%20works/assets/ISP.jpeg)

---

## Quick Comparison

| Task | Devices Involved |
|---|---|
| PC to PC (same network) | Switch / Access Point only |
| PC to Internet | Switch → Router → ISP |

---

## What Exactly *is* the Internet?

Great question — and a deep one. Can you picture it in your mind? What does it actually look like?

That's exactly what the next topic will cover. 🔜