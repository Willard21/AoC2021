let input = document.body.innerText.trim().split('\n')
const scores = {
	"(": 1,
	"[": 2,
	"{": 3,
	"<": 4
}
for (let i = 0; i < 10; i++) {
	input = input.map(row => row.replace(/\(\)|<>|{}|\[]/g, ""))
}
const scoreArr = input.map(row => row.split("").reverse().reduce((acc, char) => acc * 5 + scores[char], 0)).filter(n => n)
console.log(scoreArr.sort((a, b) => a - b)[scoreArr.length / 2 | 0])