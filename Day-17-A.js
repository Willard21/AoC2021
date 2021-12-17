let [minX, maxX, minY, maxY] = document.body.innerText.match(/x=(-?\d+)..(-?\d+), y=(-?\d+)..(-?\d+)/).slice(1).map(n => +n)
let y = 0
let vy = -minY - 1
while (vy > 0) y += vy--
y