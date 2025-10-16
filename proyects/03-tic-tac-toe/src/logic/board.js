  import { WINNERCOMBOS } from "../constants"

  export const checkWinnerFrom = (boardToCheck) =>{
    for (const combo of WINNERCOMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c])
        {
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkGameEnd = (newBoard) =>{
  return newBoard.every((square) => square !== null)
}
