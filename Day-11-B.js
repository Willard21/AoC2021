let input = document.body.innerText.trim().split('\n').map(row => row.split("").map(n => +n))
let count = 0
function flash(x, y) {
	count++
	for (let b = y - 1; b <= y + 1; b++) {
		for (let a = x - 1; a <= x + 1; a++) {
			if (input[b]?.[a] !== undefined && ++input[b][a] === 10) {
				flash(a, b)
			}
		}
	}
}
for (let i = 1; i < 10000; i++) {
	count = 0
	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			if (++input[y][x] === 10) flash(x, y)
		}
	}
	for (let y = 0; y < input.length; y++) {
		for (let x = 0; x < input[y].length; x++) {
			if (input[y][x] > 9) input[y][x] = 0
		}
	}
	if (count === 100) {
		console.log(i)
		break
	}
}