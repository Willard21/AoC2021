const input = document.body.innerText.trim().split('\n').map(row => row.split("-"))
const nodes = {}
for (let value of new Set(input.flat())) {
	nodes[value] = {
		used: 0,
		reusable: value.charCodeAt(0) < 'a'.charCodeAt(0),
		next: []
	}
}
for (let [a, b] of input) {
	nodes[a].next.push(nodes[b])
	nodes[b].next.push(nodes[a])
}

let count = 0
function search(node, reused) {
	node.used++
	for (let next of node.next) {
		if (next.reusable || !next.used || !reused && next !== nodes.start) {
			if (next === nodes.end) count++
			else search(next, reused || next.used && !next.reusable)
		}
	}
	node.used--
	return count
}
search(nodes.start)
