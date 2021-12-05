var input = document.body.innerText.trim().split("\n")
var x = 0
var y = 0
input.forEach(l => {
	let m = l.match(/(.+) (\d+)/)
	if (m[1] === "up") y -= m[2]
	if (m[1] === "down") y += +m[2]
	if (m[1] === "forward") x += +m[2]
})
x * y