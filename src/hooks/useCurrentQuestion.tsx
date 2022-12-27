export interface Question {
  category: string
  correct_answer: string
  incorrect_answers: string[]
  difficulty: string
  question: string
}

export interface Result {
  currentQuestion: Question | null
  remainingQuestions: Question[]
  success: boolean
}

export const useCurrentQuestion = (questions: Question[]): Result => {
  const currentQuestion = questions.shift() || null
  const success = Boolean(currentQuestion && 'correct_answer' in currentQuestion)
  return { currentQuestion, remainingQuestions: questions || [], success }
}