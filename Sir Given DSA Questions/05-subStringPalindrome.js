let str = "thisracecarisgood"
let strLength = str.length

for (let i = 0; i < strLength; i++) {
    for (let j = i + 1; j <= strLength; j++) {
        let x = str.slice(i, j)

        let a = ""
        for (let i = strLength - 1; i >= 0; i--) {
            a += x[i]
        }
    }
}