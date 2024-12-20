import { useState } from 'react'
import { createBoard, WINING_PATTERNS } from '../utils/ticTacToe.utils'

export const useTicTacToe = (size: number) => {
  const [board, setBoard] = useState(createBoard(size))
  const [isXNext, setIsXNext] = useState(true)

  const winningCombinations = WINING_PATTERNS
  // const winningCombinations = generateWinningCombinations(size)

  const checkWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }

    return null
  }

  const handleClick = (index: number) => {
    if (board[index] || checkWinner()) return

    const updatedBoard = [...board]
    updatedBoard[index] = isXNext ? 'X' : 'O'
    setBoard(updatedBoard)
    setIsXNext(!isXNext)
  }

  const getStatusMessage = () => {
    const winner = checkWinner()
    if (winner) return `Winner: ${winner}`
    if (!board.includes(null)) return 'Draw'
    return `Player ${isXNext ? 'X' : 'O'}'s turn`
  }

  const reset = () => {
    setBoard(createBoard(size))
    setIsXNext(true)
  }

  return { board, handleClick, getStatusMessage, reset }
}
