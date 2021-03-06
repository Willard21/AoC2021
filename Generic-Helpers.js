const input = document.body.innerText.trim().split('\n').map(row => row.split("-"))

/**
 * Returns an object containing all the nodes in the graph
 * @param {Array<Array<String>>} pairs A list of pairs that form 2-way connections on a graph.
 */
function getGraph(pairs) {
	const nodes = {}
	for (let value of new Set(pairs.flat())) {
		nodes[value] = {
			value,
			used: 0,
			next: []
		}
	}
	for (let [a, b] of pairs) {
		nodes[a].next.push(nodes[b])
		nodes[b].next.push(nodes[a])
	}
	return nodes
}

// Count paths through a graph
function countPaths(graph) {
	let nodes = Object.keys(graph)
	let count = 0
	let path = []
	function search(node) {
		path.push(node.value)
		node.used++

		if (path.length === nodes.length) {
			count++
		} else {
			for (let next of node.next) {
				if (!next.used) search(next)
			}
		}

		node.used--
		path.pop()
	}
	for (let value in graph) search(graph[value])
	return count
}

// Processing all permutations
function searchPerms(length, callback) {
	let order = new Uint8Array(length)
	for (let i = 0; i < length; i++) {
		order[i] = i
	}

	function search(index) {
		if (index >= length - 1) {
			callback(order)
			return
		}

		search(index + 1)

		for (let i = index + 1; i < length; i++) {
			let a = order[index]
			let b = order[i]
			order[index] = b
			order[i] = a

			search(index + 1)

			order[index] = a
			order[i] = b
		}
	}
	search(0)
}

// Processing a grid
for(let y = 0; y < input.length; y++) {
	for(let x = 0; x < input.length; x++) {
		for(let b = y - 1; b <= y + 1; b++) {
			for(let a = x - 1; a <= x + 1; a++) {
				if (input[b]?.[a] !== undefined) {

				}
			}
		}
	}
}

// Searching combinations of array elements
let count = 0
function search(sum, input, i = input.length - 1) {
	if (sum === 0) return ++count // A match!
	if (i < 0 || input[i] > sum) return 0 // input[i] is too big, and since it's sorted, there won't be a smaller one
	search(sum - input[i], input, i - 1) // input[i] is included in the sum
	search(sum, input, i - 1) // input[i] is *not* included in the sum
	return count
}
search(150, input.sort((a, b) => b - a))


// Weighted path finding; Breadth-first flood-fill
let map = input.map(row => row.map(() => Infinity))
let queue = [[0, 0]] // Start at (0, 0)
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
// Follow the path and render it.
let original = input.map(row => row.slice())
let y = input.length - 1
let x = input[y].length -1
while (map[y][x] > 0) {
	input[y][x] = 0
	let ny = map[y - 1]?.[x] ?? Infinity
	let py = map[y + 1]?.[x] ?? Infinity
	let nx = map[y][x - 1] ?? Infinity
	let px = map[y][x + 1] ?? Infinity
	let min = Math.min(ny, py, nx, px)
	if (ny === min) y--
	else if (py === min) y++
	else if (nx === min) x--
	else x++
}
document.getElementsByTagName("pre")[0].innerHTML = '<span style="color: lightgray">' + input.map((row, y) => row.map((n, x) => n ? n : `<span style="color: black">${original[y][x]}</span>`).join("")).join("\n") + '</span>'


// Part B of the 2015 thing I was working on before.
let input = document.body.innerText.trim().split('\n')
let str = input.pop()
input.pop()
input = input.map(line => line.match(/(\w+) => (\w+)/)).sort((a, b) => b[2].length - b[1].length - a[2].length + a[1].length).map(match => [match[2], match[1]])
let count = 0
function search(str) {
	if (str === "e") console.log(count, input = [])
	for (let i = 0; i < input.length; i++) {
		if (str.includes(input[i][0])) {
			count++
			search(str.replace(input[i][0], input[i][1]))
			count--
		}
	}
}
search(str)