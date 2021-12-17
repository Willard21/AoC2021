let [minX, maxX, minY, maxY] = document.body.innerText.match(/x=(-?\d+)..(-?\d+), y=(-?\d+)..(-?\d+)/).slice(1).map(n => +n)
let count = 0
for (let vxs = Math.floor(Math.sqrt(2 * minX)); vxs <= maxX; vxs++) {
	for (let vys = minY; vys <= -minY - 1; vys++) {
		let vy = vys
		let vx = vxs
		let x = 0
		let y = 0
		while(x <= maxX && y > minY) {
			x += vx
			y += vy
			vy--
			if (vx > 0) vx--
			else if (vx < 0) vx++
			if (x >= minX && x <= maxX && y <= maxY && y >= minY) {
				count++
				break
			}
		}
	}
}
count