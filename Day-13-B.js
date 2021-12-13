let input = document.body.innerText.trim().split('\n')
let folds = input.splice(-12, 12).map(line => line.match(/(\w)=(\d+)/)).map(match => [match[1], +match[2]])
input.pop()
input = input.map(line => line.split(",").map(n => +n))
let grid = new Uint8Array(2000 * 2000)
let maxX = 2000
let maxY = 2000
const set = (x, y) => grid[y * 2000 + x] = 1

for (let [x, y] of input) set(x, y)
for (let [axis, coord] of folds) {
	if (axis === "y") maxY = coord
	else maxX = coord
	for (let y = 0; y <= maxY * 2 && y < 2000; y++) {
		for (let x = 0; x <= maxX * 2 && x < 2000; x++) {
			if (grid[y * 2000 + x] && x > maxX && y < maxY) set(coord * 2 - x, y)
			if (grid[y * 2000 + x] && x < maxX && y > maxY) set(x, coord * 2 - y)
		}
	}
}

let rows = []
for (let y = 0; y < maxY; y++) {
	rows.push([])
	for (let x = 0; x < maxX; x++) {
		rows.at(-1).push(grid[y * 2000 + x])
	}
}
document.getElementsByTagName("pre")[0].innerHTML = rows.map(row => row.join("")).join("\n").replace(/0/g, '<span style="color: white">0</span>').replace(/1/g, "#")