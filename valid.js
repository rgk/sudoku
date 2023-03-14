function isValid(board) {
  const size = { x: board.length, y: board[0].length };
  const total = 45;
  
  for (let i = 0; i < size.x; i++) {
    if (board[i].reduce((sum, num) => sum + num) !== total) return false;
  }

  return true;
}
