import axios from 'axios'
import { count } from 'console'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Grid from '../src/components/Grid'
import Results from '../src/components/Results'
import { Question } from '../src/hooks/useCurrentQuestion'
import { useInput } from '../src/hooks/useInput'
import { sleep } from '../src/utils/sleep'

interface TriviaResponse {
  responseCode: number
  results: Question[]
}

const Trivia: React.FC = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Question>()
  const [shouldShowResults, setShouldShowResults] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [points, setPoints] = useState(0)
  const [selection, setSelection] = useState('')
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    axios.get<TriviaResponse>('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
      .then(({ data }) => {
        setCounter(prev => prev + 1)
        if ('results' in data) {
          setQuestions(data.results)
          setCurrentQuestion(data.results[0])
        }

      })
      .finally(() => setIsLoading(false))
  }, [])

  function tallyPoints(isCorrect: boolean) {
    setPoints(prev => isCorrect ? prev + 1 : prev - 1)
  }

  function getNextQuestion() {
    const updatedQuestions = questions.length > 0 ? questions.slice(1) : []
    setCounter(prev => prev + 1)
    setQuestions(updatedQuestions)

    if (updatedQuestions.length) {
      setCurrentQuestion(updatedQuestions[0])
    }
  }

  const onSelect = async (_selection: string) => {
    setSelection(_selection)
    setIsCorrect(_selection === currentQuestion?.correct_answer)
    tallyPoints(isCorrect)
    setShouldShowResults(true)

    await sleep(1500)

    setShouldShowResults(false)
    getNextQuestion()

    if (!questions.length) {
      router.push({
        pathname: '/celebration',
        query: { points: String(points) },
      });
    }
  }

  if (isLoading) {
    return <p>loading</p>
  }

  if (shouldShowResults) {
    return (
        <Results isCorrect={isCorrect} points={points} selection={selection} correctAnswer={currentQuestion?.correct_answer || ''} />
      )
  }

  if (!currentQuestion) {
    return <p>Thinking</p>
  }

  return (
    <div className="w-1/2 p-4 text-center">
      <h1>Trivia Game</h1>
      <p className="mb-10 text-xl">Questions remaining: {questions.length -1}</p>
      <p className='text-xl mb-10' dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <form id="answers">
        <Grid answers={[...currentQuestion.incorrect_answers, currentQuestion.correct_answer]} onSelect={(selection) => onSelect(selection)} />
      </form>
      <p id="result"></p>
    </div>
  );
};

export default Trivia;
