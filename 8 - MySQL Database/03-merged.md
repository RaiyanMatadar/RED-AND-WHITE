# SQL Notes

<summary>Table of Contents</summary>

- [Introduction](#introduction)
- [Types of Databases](#types-of-databases)
- [Database Management System (DBMS)](#database-management-system-dbms)
- [Databases](#databases)
- [Tables](#tables)
  <details>
  <summary>Show tables</summary>

  - [Creating a Table](#creating-a-table)
  - [Renaming a Table](#renaming-a-table)
  - [Adding a New Column](#adding-a-new-column)
  - [Renaming a Column](#renaming-a-column)
  - [Changing a Column's Data Type or Size](#changing-a-columns-data-type-or-size)
  - [Moving a Column — After a Specific Column](#moving-a-column--after-a-specific-column)
  - [Moving a Column to the First Position](#moving-a-column-to-the-first-position)
  - [Deleting a Column](#deleting-a-column)

  </details>
- [Constraints](#constraints)
  <details>
  
  <summary>Show constraints</summary>

  - [1. NOT NULL](#1-not-null)
  - [2. UNIQUE](#2-unique)
  - [3. PRIMARY KEY](#3-primary-key)
  - [4. FOREIGN KEY](#4-foreign-key)
  - [5. CHECK](#5-check)
  - [6. DEFAULT](#6-default)
  - [7. INDEX](#7-index)
  - [All Together — Full Example](#all-together--full-example)
  - [Quick Reference](#quick-reference)

  </details>

---

# Introduction

**SQL**
S = Structured
Q = Query
L = Language

SQL is used to **CREATE, RETRIEVE, UPDATE, DELETE** data in a database.
(This is commonly known as **CRUD** — Create, Read, Update, Delete)

---

# Types of Databases

There are **2 types** of databases: **RELATIONAL** & **NON-RELATIONAL**

**RELATIONAL**
Looks like an Excel spreadsheet — data is stored in rows and columns.
Tables can connect to each other using **keys** (covered below).

**NON-RELATIONAL**
Also called **NoSQL**. Stores data in formats like JSON documents, key-value pairs, or graphs.
Examples: **MongoDB, Redis, Firebase, Cassandra**.
Used when data is large, unstructured, or changes frequently.

---

# Database Management System (DBMS)

A **DBMS** is the software you use to create and manage databases.
Examples: **MySQL, PostgreSQL, SQLite, Microsoft SQL Server**.

Think of the database as the file, and the DBMS as the app that opens and edits it.

---

# Databases

**Create a database**
```sql
CREATE DATABASE myDB;
```

**Delete a database**
```sql
DROP DATABASE myDB;
```
> ⚠️ This deletes everything inside it permanently.

**Select a database to work on**
```sql
USE myDB;
```
> Always run this before doing anything — SQL needs to know which database you're working in.

---

# Tables

A table is where your data actually lives. Each table has **columns** (what kind of data) and **rows** (the actual data).

**Creating a table**
```sql
CREATE TABLE employees (
    employee_id INT,
    first_name  VARCHAR(50),
    last_name   VARCHAR(50),
    hourly_pay  DECIMAL(5,2),
    hire_date   DATE
);
```

**Renaming a table**
```sql
RENAME TABLE employees TO workers;
```

**Adding a new column**
```sql
ALTER TABLE employees
ADD phone_number VARCHAR(15);
```

**Renaming a column**

For **older MySQL versions (5.x / XAMPP)**:
```sql
-- First check the current structure
DESCRIBE employees;

-- Then rename using the old syntax
ALTER TABLE employees CHANGE phone_number email VARCHAR(50);
```

For **newer MySQL versions (8.0+)**:
```sql
ALTER TABLE employees RENAME COLUMN phone_number TO email;
```
> Note: `RENAME COLUMN` was added in MySQL 8.0. It won't work on older versions.

**Changing a column's data type or size**
```sql
ALTER TABLE employees
MODIFY COLUMN email VARCHAR(100);
```

**Moving a column — after a specific column**
```sql
ALTER TABLE employees
MODIFY email VARCHAR(50)
AFTER last_name;
```

**Moving a column to the first position**
```sql
ALTER TABLE employees
MODIFY email VARCHAR(50)
FIRST;
```

**Deleting a column**
```sql
ALTER TABLE employees
DROP COLUMN email;
```

---

# Constraints

Constraints are **rules you put on columns** to control what data is allowed.
If someone tries to insert data that breaks a rule — SQL blocks it.

They can be added when creating a table, or later using `ALTER TABLE`.

---

## 1. NOT NULL

The column **cannot be left empty**. A value is always required.

```sql
CREATE TABLE employees (
    employee_id INT         NOT NULL,
    first_name  VARCHAR(50) NOT NULL,
    last_name   VARCHAR(50)           -- this one is optional
);
```

Adding it to an existing column:
```sql
ALTER TABLE employees
MODIFY first_name VARCHAR(50) NOT NULL;
```

---

## 2. UNIQUE

**No duplicate values** allowed in this column.

Good example: email addresses — two people can't share the same one.

```sql
CREATE TABLE employees (
    employee_id INT          NOT NULL UNIQUE,
    email       VARCHAR(100) UNIQUE
);
```

> 💡 A table can have **multiple** UNIQUE columns, but only **one** PRIMARY KEY.

---

## 3. PRIMARY KEY

A PRIMARY KEY **uniquely identifies each row** in a table.
It is simply a combination of **NOT NULL + UNIQUE**.

**Every table can only have ONE primary key.**

```sql
CREATE TABLE employees (
    employee_id    INT PRIMARY KEY,
    employee_email INT PRIMARY KEY  -- ❌ ERROR: only one PRIMARY KEY allowed
);
```

SQL will throw an error. You can't declare `PRIMARY KEY` twice like that.

**So what if you need two columns to identify a row together?**

Use a **Composite Primary Key** — one primary key made from two columns combined:

```sql
CREATE TABLE enrollments (
    student_id INT,
    course_id  INT,
    PRIMARY KEY (student_id, course_id)  -- ✅ together they are unique
);
```

> 💡 This works because one student can take many courses, and one course can have many students — but the **same student can't enroll in the same course twice**. So the combination is what's unique.

| student_id | course_id | Allowed? |
|---|---|---|
| 1 | 101 | ✅ |
| 1 | 102 | ✅ same student, different course |
| 2 | 101 | ✅ different student, same course |
| 1 | 101 | ❌ exact duplicate — blocked |

---

## 4. FOREIGN KEY

A FOREIGN KEY **links a column in one table to the PRIMARY KEY of another table.**

It makes sure you can't add data that references something that doesn't exist.

```sql
CREATE TABLE orders (
    order_id    INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
```

Plain English: "the `customer_id` here must exist in the `customers` table."
If you try to add an order for a customer that doesn't exist — SQL blocks it.

---

## 5. CHECK

The column value **must pass a condition** you define.

```sql
CREATE TABLE employees (
    employee_id INT          PRIMARY KEY,
    hourly_pay  DECIMAL(5,2) CHECK (hourly_pay >= 10.00),
    age         INT          CHECK (age >= 18)
);
```

If someone tries to insert a pay of `5.00` — SQL rejects it.

You can also name your CHECK constraint for easier reference:
```sql
ALTER TABLE employees
ADD CONSTRAINT chk_pay CHECK (hourly_pay >= 10.00);
```

---

## 6. DEFAULT

If no value is provided, **automatically use this value.**

```sql
CREATE TABLE employees (
    employee_id INT         PRIMARY KEY,
    hire_date   DATE        DEFAULT (CURRENT_DATE),
    country     VARCHAR(50) DEFAULT 'India'
);
```

If you insert a row without specifying `country`, it fills in `'India'` on its own.

---

## 7. INDEX

Not technically a constraint, but works alongside them.
An INDEX **speeds up searching** on a column.

Think of it like the index at the back of a book — instead of reading every page, you jump straight to what you need.

```sql
CREATE INDEX idx_last_name
ON employees(last_name);
```

Unique index (also blocks duplicates, like UNIQUE):
```sql
CREATE UNIQUE INDEX idx_email
ON employees(email);
```

> ⚠️ Indexes speed up **reading** but slow down **writing** (INSERT/UPDATE/DELETE) because the index also needs to update. Only add indexes on columns you search often.

---

## All Together — Full Example

```sql
CREATE TABLE employees (
    employee_id   INT           PRIMARY KEY,                 -- NOT NULL + UNIQUE
    first_name    VARCHAR(50)   NOT NULL,                    -- required
    last_name     VARCHAR(50)   NOT NULL,                    -- required
    email         VARCHAR(100)  UNIQUE,                      -- no duplicates
    hourly_pay    DECIMAL(5,2)  CHECK (hourly_pay >= 10.00), -- must be >= 10
    department_id INT           DEFAULT 1,                   -- defaults to dept 1
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);
```

---

## Quick Reference

| Constraint | What it does |
|---|---|
| `NOT NULL` | Column can't be blank |
| `UNIQUE` | No duplicate values allowed |
| `PRIMARY KEY` | Row's unique ID — NOT NULL + UNIQUE combined |
| `FOREIGN KEY` | Must match a value that exists in another table |
| `CHECK` | Value must pass a condition you set |
| `DEFAULT` | Auto-fills a value if none is provided |
| `INDEX` | Makes searching faster (not a true constraint) |