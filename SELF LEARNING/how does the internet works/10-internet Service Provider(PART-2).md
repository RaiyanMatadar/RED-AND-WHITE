## Scenario

Let's say a newly built website called `abc.com` is hosted in the USA and has only one server
there. For a user outside the USA to access it, the request must travel through at least one
Global ISP.

### Flow of accessing a webpage

1. The user sends a request message to the server in the USA.
2. The server sends a response message back to the user.

This scenario applies to small company websites that have only a single server in one location.

---

## Google's Approach (Multiple Servers)

Now if we consider Google — Google has a large number of servers distributed across the globe.
Because of this, the response reaches the user's browser much faster and more efficiently, since
the request is served by whichever server is geographically closest to the user.

---

## Peering

Google establishes an almost direct connection with the user. Instead of the request traveling
from the user → Local ISP → Regional ISP → Global ISP → Google's server, Google builds a
**direct connection to the Local ISP** in that region.

This means the data travels far fewer hops, reducing latency significantly. This arrangement
between two networks to exchange traffic directly is called **peering**.

---

## Internet Backbone & Internet Exchange Points (IXP)

An **Internet Exchange Point (IXP)** is a physical infrastructure that allows multiple ISPs and
large networks to interconnect and exchange traffic directly with each other.

IXPs are what make the **internet backbone** function efficiently at a global scale — they allow
Global ISPs to communicate with each other in a synchronized and cost-effective way, without
routing traffic through unnecessary intermediaries.