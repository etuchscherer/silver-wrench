interface Props {
  isCorrect: boolean
  points: number
  selection: string
  correctAnswer: string
}

function Results({ isCorrect, points, selection, correctAnswer }: Props) {
  return (
    <>
      <div>
      <h1 className="text-3xl text-center mb-10" style={ isCorrect ? { color: 'green'} : { color : 'red' } }>{isCorrect ? 'Correct' : 'Wrong'}</h1>
      <p className="text-xl">Your score is :: {points}</p>
      <p>You chose: {selection} and the correct answer was {correctAnswer}</p>
      </div>
    </>
   );
}

export default Results;