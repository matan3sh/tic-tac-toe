import { useTicTacToe } from '../hooks/useTicTacToe'

const TicTacToe = ({ size = 3 }: { size?: number }) => {
  const { board, handleClick, reset, getStatusMessage } = useTicTacToe(size)

  return (
    <div className="game" style={{ maxWidth: `calc(${size} * 100px)` }}>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>

      <div
        className="board"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
      >
        {board.map((cell, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
            disabled={cell !== null}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe
