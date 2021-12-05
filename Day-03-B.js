const input = document.body.innerText.trim().split('\n')
function reduce(arr, negate) {
	for (let i = 0; arr.length > 1; i++) {
		let c = 0
		for (let n of arr) c += +n[i]
		const v = c >= arr.length / 2 ? '1' : '0'
		arr = arr.filter(n => negate ? n[i] !== v : n[i] === v)
	}
	return arr[0]
}
parseInt(reduce(input), 2) * parseInt(reduce(input, true), 2)