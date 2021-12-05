var input = document.body.innerText.trim().split("\n").map(n => +n)
let count = 0
let prev = Infinity
for (let n of input) {
	if (n > prev) count++
	prev = n
}
count