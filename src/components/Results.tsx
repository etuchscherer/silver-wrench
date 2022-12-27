interface Props {
  isCorrect: boolean
  points: number
}

function Results({ isCorrect, points }: Props) {
  return (
    <>
      <div>
      <h1 className="text-3xl text-center mb-10" style={ isCorrect ? { color: 'green'} : { color : 'red' } }>{isCorrect ? 'Correct' : 'Wrong'}</h1>
      <p className="text-xl">Your score is :: {points}</p>
      </div>
    </>
   );
}

export default Results;