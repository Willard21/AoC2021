let counts = new Float64Array(9)
document.body.innerText.trim().split(',').forEach(n => counts[n]++)
for (let i = 0; i < 256; i++) {
	let zero = counts[0]
	for (let i = 1; i < 9; i++) {
		counts[i - 1] = counts[i]
	}
	counts[8] = zero
	counts[6] += zero
}
counts.reduce((sum, n) => sum + n)