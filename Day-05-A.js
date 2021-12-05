const lines = document.body.innerText.trim().split("\n").map(row => row.match(/\d+/g).map(n => +n)).filter(line => line[0] === line[2] || line[1] === line[3])
const canvas = new Uint8Array(1000000)
let count = 0
for (let [x, y, fx, fy] of lines) {
	let dx = Math.sign(fx - x)
	let dy = Math.sign(fy - y)
	while(x - dx !== fx || y - dy !== fy) {
		if (++canvas[y*1000 + x] === 2) count++
		x += dx
		y += dy
	}
}
count