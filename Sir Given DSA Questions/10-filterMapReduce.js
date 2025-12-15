let arr = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
]

// (which is pricePerUnit * (100 - current_stock)).

const filtered = arr.filter((value) => {
    return value.stock < 100;
});

const maped = filtered.map((value) => {
    const price = value.pricePerUnit;
    const currentStock = value.stock;

    return {
        name: value.name,
        category: value.category,
        totalCost: price * (100 - currentStock)
    }
});

const reduced = maped.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = 0;
    }
    acc[curr.category] += curr.totalCost
    return acc
}, {});

console.log(reduced)