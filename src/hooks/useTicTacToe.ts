import { useState } from 'react'
import {
  createBoard,
  generateWinningCombinations,
} from '../utils/ticTacToe.utils'

export const useTicTacToe = (size: number) => {
  const [board, setBoard] = useState(createBoard(size))
  const [isXNext, setIsXNext] = useState(true)

  const winningCombinations = generateWinningCombinations(size)

  const checkWinner = () => {
    for (const combination of winningCombinations) {
      const [first, ...rest] = combination
      if (
        board[first] &&
        rest.every((index) => board[first] === board[index])
      ) {
        return board[first]
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
