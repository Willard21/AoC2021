let input = document.body.innerText.trim().split('\n')
const scores = {
	")": 3,
	"]": 57,
	"}": 1197,
	">": 25137
}
for (let i = 0; i < 10; i++) {
	input = input.map(row => row.replace(/\(\)|<>|{}|\[]/g, ""))
}
input.reduce((acc, row) => acc + scores[row.match(/[)\]}>]/)?.[0]] || acc, 0)