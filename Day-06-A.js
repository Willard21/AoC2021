const input = document.body.innerText.trim().split(',').map(n => +n)
for (let i = 0; i < 80; i++) {
	for (let i = input.length - 1; i >= 0; i--) {
		if (!input[i]) {
			input.push(8)
			input[i] = 6
		} else input[i]--
	}
}
input.length