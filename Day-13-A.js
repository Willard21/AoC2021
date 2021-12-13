let input = document.body.innerText.trim().split('\n')
let folds = input.splice(-12, 12).map(line => line.match(/(\w)=(\d+)/)).map(match => [match[1], +match[2]])
input.pop()
input = input.map(line => line.split(",").map(n => +n))
let grid = new Uint8Array(2000 * 2000)
let maxX = 2000
let maxY = 2000
function set(x, y) {
	grid[y * 2000 + x] = 1
}
for (let [x, y] of input) {
	set(x, y)
}

for (let i = 0; i < 1; i++) {
	let [axis, coord] = folds[i]
	if (axis === "y") {
		for (let y = coord; y <= maxY && y <= coord * 2; y++) {
			for (let x = 0; x < maxX; x++) {
				if (grid[y * 2000 + x]) set(x, coord * 2 - y)
			}
		}
		maxY = coord
	} else {
		for (let y = 0; y < maxY; y++) {
			for (let x = coord; x <= maxX && x <= coord * 2; x++) {
				if (grid[y * 2000 + x]) set(coord * 2 - x, y)
			}
		}
		maxX = coord
	}
}

let count = 0
for (let y = 0; y < maxY; y++) {
	for (let x = 0; x < maxX; x++) {
		if (grid[y * 2000 + x]) count++
	}
}
count