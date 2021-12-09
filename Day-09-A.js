const input = document.body.innerText.trim().split('\n')
function check(n, x, y) {
	if (!input[y] || !input[y][x] || n < +input[y][x]) return true
	return false
}
let sum = 0
for (let y = 0; y < input.length; y++) {
	for (let x = 0; x < input[y].length; x++) {
		let n = +input[y][x]
		if (check(n, x + 1, y) && check(n, x - 1, y) && check(n, x, y - 1) && check(n, x, y + 1)) sum += n + 1
	}
}
console.log(sum)