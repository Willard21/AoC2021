const input = document.body.innerText.trim().split(',').map(n => +n).sort((a, b) => a - b)
const med = input[input.length / 2 | 0]
input.reduce((s, n) => s + Math.abs(med - n), 0)