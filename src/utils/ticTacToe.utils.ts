// Utility function to create an empty board
export const createBoard = (size: number) => Array(size * size).fill(null)

// Generate all possible winning combinations for the given board size
export const generateWinningCombinations = (size: number) => {
  const range = Array.from({ length: size }, (_, i) => i)

  // Rows
  const rows = range.map((row) => range.map((col) => row * size + col))

  // Columns
  const cols = range.map((col) => range.map((row) => row * size + col))

  // Diagonals
  const diag1 = range.map((i) => i * (size + 1))
  const diag2 = range.map((i) => (i + 1) * (size - 1))

  return [...rows, ...cols, diag1, diag2]
}
