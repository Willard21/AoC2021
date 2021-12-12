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

function search(array, callback) {
	class Node {
		constructor(value, index) {
			this.value = value
			this.used = false
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
	function search(node) {
		node.used = true
		stack.push(node.index)

		if (node.value === "end") {
			callback(stack)
		} else {
			for (let n of node.next) {
				if (n.reusable || !n.used) search(n)
			}
		}

		stack.pop()
		node.used = false
	}
	search(nodes.filter(node => node.value === "start")[0])
}
search(Array.from(rooms), callback)
count