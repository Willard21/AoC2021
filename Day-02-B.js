var input = document.body.innerText.trim().split("\n")
var x = 0
var y = 0
var aim = 0
input.forEach(l => {
	let m = l.match(/(.+) (\d+)/)
	if (m[1] === "up") aim -= m[2]
	if (m[1] === "down") aim += +m[2]
	if (m[1] === "forward") {
		x += +m[2]
		y += aim * m[2]
	}
})
x * y