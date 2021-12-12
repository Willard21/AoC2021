let input = document.body.innerText.trim().split('\n').map(row => row.split("-"))
let map = {}
let rooms = new Set(input.flat())
for (let loc of rooms) {
	map[loc] = new Set()
}
for (let row of input) {
	map[row[0]].add(row[1])
	map[row[1]].add(row[0])
}

let count = 0
function callback() {
	count++
}

// I wrote this for a 2015 AoC challenge, and just modified it a tad with the search confitions. It was originally for searching permutations.
function search(array, callback) {
	class Node {
		constructor(value, index) {
			this.value = value
			this.used = 0
			this.index = index
			this.reusable = value.charCodeAt(0) < 'a'.charCodeAt(0)
		}
		addNodes(nodes) {
			this.next = nodes
		}
	}
	const nodes = array.map((value, index) => new Node(value, index))
	nodes.forEach(node => node.addNodes(nodes.filter(n => map[node.value].has(n.value))))

	let stack = []
	let reused = false
	function search(node) {
		node.used++
		stack.push(node.index)
		if (!node.reusable && node.used > 1) reused = true

		if (node.value === "end") {
			callback(stack)
		} else {
			for (let n of node.next) {
				if (n.reusable || !n.used || !reused && n.value !== "start") search(n)
			}
		}

		stack.pop()
		node.used--
		if (!node.reusable && node.used === 1) reused = false
	}
	search(nodes.filter(node => node.value === "start")[0])
}

search(Array.from(rooms), callback)

count