const input = document.body.innerText.trim().split(',').map(n => +n).sort((a, b) => a - b)
input.reduce((s, n) => s + Math.abs(input[input.length / 2 | 0] - n), 0)