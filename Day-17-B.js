let [minX, maxX, minY, maxY] = document.body.innerText.match(/x=(-?\d+)..(-?\d+), y=(-?\d+)..(-?\d+)/).slice(1).map(n => +n)
let count = 0
for (let vxs = 23; vxs <= 292; vxs++) {
	for (let vys = -68; vys <= 67; vys++) {
		let vy = vys
		let vx = vxs
		let x = 0
		let y = 0
		while(x <= 292 && y > -68) {
			x += vx
			y += vy
			vy -= 1
			if (vx > 0) vx--
			else if (vx < 0) vx++
			if (x >= 269 && x <= 292 && y <= -44 && y >= -68) {
				count++
				break
			}
		}
	}
}
count