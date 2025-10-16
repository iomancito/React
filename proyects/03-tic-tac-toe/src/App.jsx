import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/square.jsx'
import { TURNS} from './constants.js'
import { checkWinnerFrom, checkGameEnd } from './logic/board.js'
import { WinnerModal } from './components/winnerModal.jsx'
import './App.css'

function App() {
  console.log("rend")
  const [board, setBoard] = useState(Array(9).fill(null)) //estado del tablero
  const [turn, setTurn] = useState(TURNS.X)  //estado turno del jugador
  const [winner, setWinner] = useState(null)  //null = no hay gannador // false = empate // true = ganador



  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const  updateBoard = (index) =>{
    //No sobreescribir casilla marcada
    if(board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //Cambiar turno
    const newTurn = turn ===TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X)
    //Revisar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    }else if (checkGameEnd(newBoard)){
      setWinner(false)
    }
  }



  return (
    <main className="board">
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected>
          {turn}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
