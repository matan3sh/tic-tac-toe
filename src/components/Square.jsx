const boxStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

function Square({ num, onClick }) {
  return (
    <div className="square" style={boxStyle} onClick={() => onClick()}>
      {num}
    </div>
  );
}

export default Square;
