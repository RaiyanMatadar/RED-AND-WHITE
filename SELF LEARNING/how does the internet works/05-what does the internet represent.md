# How Packets Travel Across the Internet

## The Big Picture

![Internet Structure](../how%20does%20the%20internet%20works/assets/05.jpeg)

Looking at the diagram above — LAN 1 (Canada) and LAN 2 (Mexico) are two completely separate local networks, connected to each other through the internet's web of routers.

---

## How a Packet Travels from One Country to Another

**Scenario: A PC in LAN 1 (Canada) wants to send a packet to a PC in LAN 2 (Mexico)**

```
PC (Canada) ──► Switch ──► Router ──► Internet Routers ──► Router ──► PC (Mexico)
```

Step by step:
1. The PC sends the packet to the **switch**
2. The switch figures out where it needs to go and forwards it to the **router**
3. The router sends it into the **internet** — which is a mesh of many interconnected routers
4. The packet hops from router to router until it reaches the destination router
5. Finally it arrives at the target PC in **LAN 2 (Mexico)**

---

## The Routing Table

Every router has a special table called a **Routing Table**. This is what makes smart packet delivery possible.

When a router receives a packet, it:
1. Reads the packet's **destination address**
2. Looks it up in its **routing table**
3. Decides which **port (path)** to send the packet through

> This process of receiving a packet and deciding where to forward it is called **Forwarding**.

---

## How Routing Tables Are Built

Each router has **special processors** inside that build and maintain routing tables using **special algorithms**.

A router doesn't just pick the route with the fewest hops — it considers multiple factors:

| Factor | What it means |
|---|---|
| **Shortest path** | Fewest number of routers to pass through |
| **Congestion control** | Avoiding routes that are overloaded with traffic |
| **Speed** | Always trying to deliver packets as fast as possible |

> A router always wants to deliver packets to their destination in the **fastest way possible** — not just the shortest.

---

## What is the Internet, Really?

The textbook definition says:

> *"The internet is a network of networks."*

But simply put — it's millions of LANs around the world, all connected together through a massive distributed web of routers, constantly forwarding packets to their destinations.

---

How the internet looks from the **perspective of your own computer** — that's what the next chapter covers. 🔜