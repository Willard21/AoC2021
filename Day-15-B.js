let input = document.body.innerText.trim().split('\n').map(row => row.split("").map(n => +n))
const width = input.length
for (let i = 1; i < 5; i++) input.forEach(row => row.push(...row.slice(0, width).map(n => n + i > 9 ? n + i - 9 : n + i)))
for (let i = 1; i < 5; i++) input.push(...input.slice(0, width).map(row => row.map(n => n + i > 9 ? n + i - 9 : n + i)))
let map = input.map(row => row.map(() => Infinity))
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