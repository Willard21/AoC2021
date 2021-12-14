let input = document.body.innerText.trim().split('\n')
let str = input.shift().split("")
input.shift()
input = input.map(row => row.match(/(\w+) -> (\w)/))
let pairs = {}
input.forEach(row => pairs[row[1]] = [row[1][0] + row[2], row[2] + row[1][1]]) // {"HV": ["HB", "BV"]}
let counts = {}
for (let pair in pairs) counts[pair] = 0
for (let i = 0; i < str.length - 1; i++) counts[str[i] + str[i + 1]]++
for (let i = 0; i < 40; i++) {
	let copy = JSON.parse(JSON.stringify(counts))
	for (let pair in copy) {
		for (let p of pairs[pair]) counts[p] += copy[pair]
		counts[pair] -= copy[pair]
	}
}
let letters = {}
for (let c of new Set(Object.keys(pairs).map(pair => pair.split("")).flat())) letters[c] = 0
for (let pair in counts) {
	letters[pair[0]] += counts[pair]
	letters[pair[1]] += counts[pair]
}
let sorted = Object.entries(letters).sort((a, b) => a[1] - b[1])
Math.ceil(sorted.at(-1)[1] / 2) - Math.ceil(sorted[0][1] / 2)