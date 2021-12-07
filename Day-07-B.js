const input = document.body.innerText.trim().split(',').map(n => +n)
let min = Infinity
for (let i = 0; i < 2000; i++) {
	min = Math.min(min, input.reduce((s, n) => s + Math.abs(i - n) * (Math.abs(i - n) + 1) / 2, 0))
}
min