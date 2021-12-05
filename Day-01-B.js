var input = document.body.innerText.trim().split("\n").map(n => +n)
let count = 0
let prev = Infinity
for (let i = 0; i < input.length - 2; i++) {
	const sum = input[i] + input[i + 1] + input[i + 2]
	if (sum > prev) count++
	prev = sum
}
count