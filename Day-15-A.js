let input = document.body.innerText.trim().split('\n').map(row => row.split("").map(n => +n))
let map = input.map(row => row.map(n => Infinity))
input[0][0] = 0
map[0][0] = 0

let queue = [[0, 0]]
function set(x, y, prev) {
	if (input[y]?.[x] + prev < map[y]?.[x]) {
		queue.push([x, y])
		map[y][x] = prev + input[y][x]
	}
}
while (queue.length) {
	let [x, y] = queue.shift()
	let c = map[y][x]
	set(x + 1, y, c)
	set(x - 1, y, c)
	set(x, y + 1, c)
	set(x, y - 1, c)
}
map.at(-1).at(-1)