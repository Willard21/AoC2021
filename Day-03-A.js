const counts = new Uint16Array(12)
document.body.innerText.trim().split('\n').forEach(row => row.split('').forEach((bit, i) => counts[i] += +bit))
const gamma = parseInt(counts.map(n => n > 500 ? '1' : '0').join(''), 2)
gamma * (~gamma & 0xfff)
