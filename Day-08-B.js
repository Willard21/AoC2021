/* This is the solution I used to solve the puzzle. It took about 55 minutes to code. */
const input = document.body.innerText.trim().split('\n').map(line => line.match(/\w+/g))
let total = 0
for (let row of input) {
    let key = row.slice(0, 10)
    let one = key.filter(n => n.length === 2)[0]
    let seven = key.filter(n => n.length === 3)[0]
    let four = key.filter(n => n.length === 4)[0]
    let eight = key.filter(n => n.length === 7)[0]
    let three = key.filter(n => n.length === 5 && n.includes(one[0]) && n.includes(one[1]))[0]
    let a = key.filter(n => n.length === 3)[0].split("").filter(c => !one.includes(c))[0]
    let d = three.split("").filter(char => char !== a && !one.includes(char) && four.includes(char))[0]
    let zero = key.filter(n => n.length === 6 && !n.includes(d))[0]
    let nine = key.filter(n => n.length === 6 && n!== zero && n.includes(one[0]) && n.includes(one[1]))[0]
    let six = key.filter(n => n.length === 6 && n !== nine && n !== zero)[0]
    let c = one.split("").filter(char => !six.includes(char))[0]
    let five = key.filter(n => n.length === 5 && !n.includes(c))[0]
    let two = key.filter(n => n.length === 5 && n !== five && n !== three)[0]

    key = [zero, one, two, three, four, five, six, seven, eight, nine].map(n => n.split("").sort().join(""))
    total += +row.slice(-4).map(n => key.indexOf(n.split("").sort().join(""))).join("")
}
total

/*
This is a different solution I came up with after I saw people talking about permutations, and I wondered if brute forcing it would be easier.
It was simpler to code, but it takes like 20 seconds to run since it searches every permutation for the correct one.
It took about 15 minutes to code, but I had already thought of the solution before I started the timer. Plus I'd already solved it once.
The searchPerms function is completely generic and I wrote it previously for just such an occasion.
*/
function searchPerms(length, callback) {
    const used = new Uint8Array(length)
    const order = new Uint8Array(length)
    let depth = 0
    function search(index) {
        order[depth] = index
        used[index] = 1
        depth++

        if (depth === length) {
            callback(order)
        } else {
            for (let i = 0; i < length; i++) {
                if (!used[i]) search(i)
            }
        }
        
        depth--
        used[index] = 0
    }
    for (let i = 0; i < length; i++) search(i)
}

const input = document.body.innerText.trim().split('\n').map(line => line.match(/\w+/g))
const map = ["abcefg", "cf", "acdeg", "acdfg", "bcdf", "abdfg", "abdefg", "acf", "abcdefg", "abcdfg"]
const valid = map.slice().sort()
let total = 0
for (let row of input) {
    let key = row.slice(0, 10)
    let end = row.slice(-4)
    let eight = "abcdefg"
    function verify(permOrder) {
        const mapped = key.map(num => num.split("").map(char => eight[permOrder[eight.indexOf(char)]]).sort().join("")).sort()
        for (let i = 0; i < 10; i++) if (mapped[i] !== valid[i]) return
        total += +end.map(num => map.indexOf(num.split("").map(char => eight[permOrder[eight.indexOf(char)]]).sort().join(""))).join("")
    }
    searchPerms(7, verify)
}
total