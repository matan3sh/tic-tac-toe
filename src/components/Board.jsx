import { useState } from "react";
import Square from "./Square";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const messageStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const rowStyle = {
  display: "flex",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

function Board() {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();

  const handleCheckForWinner = (squares) => {
    let combos = {
      across: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      down: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagnol: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          return;
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
        }
      });
    }
  };

  const markSquare = (num) => {
    if (cells[num] !== "") {
      alert("already clicked");
      return;
    }
    let squares = [...cells];
    if (turn === "x") {
      squares[num] = "x";
      setTurn("o");
    } else {
      squares[num] = "o";
      setTurn("x");
    }
    handleCheckForWinner(squares);
    setCells(squares);
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  };

  return (
    <div style={containerStyle} className="tttBoard">
      <div id="statusArea" className="status" style={messageStyle}>
        Current player: <span>{turn}</span>
      </div>
      {winner && (
        <div id="winnerArea" className="winner" style={messageStyle}>
          Winner: <span>{winner}</span>
        </div>
      )}
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square onClick={() => markSquare(0)} num={cells[0]} />
          <Square onClick={() => markSquare(1)} num={cells[1]} />
          <Square onClick={() => markSquare(2)} num={cells[2]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square onClick={() => markSquare(3)} num={cells[3]} />
          <Square onClick={() => markSquare(4)} num={cells[4]} />
          <Square onClick={() => markSquare(5)} num={cells[5]} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square onClick={() => markSquare(6)} num={cells[6]} />
          <Square onClick={() => markSquare(7)} num={cells[7]} />
          <Square onClick={() => markSquare(8)} num={cells[8]} />
        </div>
      </div>
      <button style={buttonStyle} onClick={() => handleRestart()}>
        Reset
      </button>
    </div>
  );
}

export default Board;
