const input = document.body.innerText.trim().split('\n').map(line => line.split("").map(n => +n))
const basins = []
let count = 0
function spread(x, y) {
	if (input[y] !== undefined && input[y][x] !== undefined && input[y][x] !== 9) {
		count++
		input[y][x] = 9
		spread(x + 1, y)
		spread(x - 1, y)
		spread(x, y - 1)
		spread(x, y + 1)
	}
}
for (let y = 0; y < input.length; y++) {
	for (let x = 0; x < input[y].length; x++) {
		if (input[y][x] !== 9) {
			spread(x, y)
			basins.push(count)
			count = 0
		}
	}
}
console.log(basins.sort((a, b) => b - a).slice(0, 3).reduce((acc, n) => acc * n, 1))