const input = document.body.innerText.trim().split("\n")
const ballz = input.shift().split(",").map(n => +n)
const boards = []

function check(board) {
	for (let y = 0; y < 5; y++) {
		let sumx = 0
		let sumy = 0
		for (let x = 0; x < 5; x++) {
			sumx += board[y][x]
			sumy += board[x][y]
		}
		if (!sumx || !sumy) return true
	}
	return false
}

function score(board) {
	let sum = 0
	for (let y = 0; y < 5; y++) {
		for (let x = 0; x < 5; x++) {
			sum += board[y][x]
		}
	}
	return sum
}

function call(board, number) {
	for (let y = 0; y < 5; y++) {
		for (let x = 0; x < 5; x++) {
			if (board[y][x] === number) {
				board[y][x] = 0
				return true
			}
		}
	}
	return false
}

while (input.length) {
	input.shift() // clear empty line
	const board = []
	for (let i = 0; i < 5; i++) {
		board.push(input.shift().trim().split(/\s+/g).map(n => +n))
	}
	boards.push(board)
}

loop:
for (let ball of ballz) {
	for (let board of boards) {
		if (call(board, ball) && check(board)) {
			console.log(ball * score(board))
			break loop
		}
	}
}