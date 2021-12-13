let input = document.body.innerText.trim().split('\n')
let folds = input.splice(-12, 12).map(line => line.match(/(\w)=(\d+)/)).map(match => [match[1], +match[2]])
input.pop()
input = input.map(line => line.split(",").map(n => +n))
let grid = new Uint8Array(2000 * 2000)
let maxX = folds[0][1]
let maxY = 2000
const set = (x, y) => grid[y * 2000 + x] = 1

for (let [x, y] of input) set(x, y)
for (let y = 0; y < maxY; y++) {
	for (let x = maxX + 1; x <= maxX * 2; x++) {
		if (grid[y * 2000 + x]) set(maxX * 2 - x, y)
	}
}

let count = 0
for (let y = 0; y < maxY; y++) {
	for (let x = 0; x < maxX; x++) {
		if (grid[y * 2000 + x]) count++
	}
}
count