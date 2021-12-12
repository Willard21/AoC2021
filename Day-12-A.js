const input = document.body.innerText.trim().split('\n').map(row => row.split("-"))
const nodes = {}
for (let value of new Set(input.flat())) {
	nodes[value] = {
		used: false,
		reusable: value.charCodeAt(0) < 'a'.charCodeAt(0),
		next: []
	}
}
for (let [a, b] of input) {
	nodes[a].next.push(nodes[b])
	nodes[b].next.push(nodes[a])
}

let count = 0
function search(node) {
	node.used = true
	for (let next of node.next) {
		if (next.reusable || !next.used) {
			if (next === nodes.end) count++
			else search(next)
		}
	}
	node.used = false
	return count
}
search(nodes.start)
