import { initial } from 'lodash';
import React, { useReducer } from 'react';

interface State {
  points: number
}

type Action =
  | { type: 'correct-answer' }
  | { type: 'wrong-answer' }
  | { type: 'reset' }

export function usePointMachine(initialPoints = 0): [State, (action: Action) => void] {

  const [state, dispatch] = useReducer((state: State, action: Action) => {
  switch (action.type) {
    case 'correct-answer':
      return { points: state.points + 1000 };
    case 'wrong-answer':
      return { points: state.points }
    case 'reset':
      return { points: state.points = initialPoints };
    default:
      return { points: 0 }
  }
  }, { points: initialPoints})

  return [state, dispatch];
}
