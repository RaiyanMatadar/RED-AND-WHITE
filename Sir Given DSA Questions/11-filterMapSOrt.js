let arr = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]

const filteringTask = arr.filter((value) => {
    if (value.tasksCompleted > 5) {
        return value;
    }
});

const mapingFilterArr = filteringTask.map((value) => {
    if (value.rating >= 4.5) {
        return {
            name: value.name,
            performace: "Excellent"
        };
    } else if (value.rating >= 3 & value.rating <= 4.5) {
        return {
            name: value.name,
            performace: "Good"
        };
    } else {
        return {
            name: value.name,
            performace: "Need improvement"
        }
    }
})

const sorted = mapingFilterArr.sort((a, b) => a.performace.localeCompare(b.performace));

console.log(sorted);