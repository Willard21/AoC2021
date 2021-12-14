let input = document.body.innerText.trim().split('\n')
let str = input.shift().split("")
input.shift()
input = input.map(row => row.match(/(\w+) -> (\w)/))
let pairs = {}
input.forEach(row => pairs[row[1]] = [row[1][0] + row[2], row[2] + row[1][1]]) // pairs = {"HV": ["HB", "BV"]}
let counts = {}
for (let pair in pairs) counts[pair] = 0
for (let i = 0; i < str.length - 1; i++) counts[str[i] + str[i + 1]]++ // counts = {"HB": 1}

// Do the "insertion" steps
for (let i = 0; i < 40; i++) {
	let copy = Object.assign({}, counts)
	for (let pair in copy) {
		for (let p of pairs[pair]) counts[p] += copy[pair]
		counts[pair] -= copy[pair]
	}
}

// Count the letters
let letters = {}
for (let match of input) letters[match[2]] = 0
for (let pair in counts) {
	letters[pair[0]] += counts[pair]
	letters[pair[1]] += counts[pair]
}
letters[str.at( 0)]++
letters[str.at(-1)]++
let sorted = Object.entries(letters).sort((a, b) => a[1] - b[1])
sorted.at(-1)[1] / 2 - sorted[0][1] / 2
