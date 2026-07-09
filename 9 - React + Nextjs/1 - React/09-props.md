# React Props — Cheat Sheet
> Based on the `Contact` component example

---

## How Data Flows

```
App (parent)                          Contact (child)
─────────────────────────             ─────────────────────────
<Contact                              function Contact(props)
  name="Mr. Whiskerson"    ──────►    props.name
  phone="(212) 555-1234"   ──────►    props.phone
  email="mr.whiskaz@..."   ──────►    props.email
/>
```

---

## What `props` Actually Is (Plain JS)

When you write JSX attributes, React bundles them into a **plain object** and passes it to your function:

```jsx
// What you write (JSX)
<Contact
  name="Mr. Whiskerson"
  phone="(212) 555-1234"
  email="mr.whiskaz@catnap.meow"
/>

// What React actually does (plain JS)
Contact({
  name: "Mr. Whiskerson",
  phone: "(212) 555-1234",
  email: "mr.whiskaz@catnap.meow"
})
```

So `props` inside your component is just that object:

```js
props = {
  name:  "Mr. Whiskerson",
  phone: "(212) 555-1234",
  email: "mr.whiskaz@catnap.meow"
}

// Accessing values = normal dot notation
props.name   // "Mr. Whiskerson"
props.phone  // "(212) 555-1234"
props.email  // "mr.whiskaz@catnap.meow"
```

---

## 4 Usages → 4 Separate Objects

Each `<Contact />` in `App` triggers a **separate function call** with its own props object:

| Call | name | phone | email |
|------|------|-------|-------|
| 1 | Mr. Whiskerson | (212) 555-1234 | mr.whiskaz@catnap.meow |
| 2 | Fluffykins | (212) 555-2345 | fluff@me.com |
| 3 | Felix | (212) 555-4567 | thecat@hotmail.com |
| 4 | Pumpkin | (0800) CAT KING | pumpkin@scrimba.com |

Same component function, different data each time.

---

## The Full Component

```jsx
// components/Contact.jsx
export default function Contact(props) {
    return (
        <article className="contact-card">
            <h3>{props.name}</h3>        {/* dot notation to read each prop */}
            <div className="info-group">
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <p>{props.email}</p>
            </div>
        </article>
    )
}
```

---

## Cleaner Syntax: Destructuring

Instead of writing `props.name` everywhere, destructure in the parameter:

```jsx
// Before (using props object)
function Contact(props) {
    return <h3>{props.name}</h3>
}

// After (destructuring — same result, cleaner)
function Contact({ name, phone, email }) {
    return <h3>{name}</h3>
}
```

---

## 3 Golden Rules

1. **Props flow one way only** — parent → child, never the reverse.

2. **Props are read-only** — never modify them inside the component.
    ```js
    // ❌ Wrong
    props.name = "Mittens"

    // ✅ Right — just read it
    console.log(props.name)
    ```

3. **Same component, different props → different output** — the `Contact` function runs once per usage with a fresh object each time.

---

## Common Mistakes

| Mistake | Wrong | Right |
|---------|-------|-------|
| Modifying props | `props.name = "X"` | use `state` instead |
| Numbers without `{}` | `sugar="2"` | `sugar={2}` |
| Trying to pass data upward | passing prop child→parent | pass a **function** as prop instead |