export const WINING_PATTERNS = [
  // Rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Columns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonals
  [0, 4, 8],
  [2, 4, 6],
]

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
