import React from 'react';
import { usePointMachine } from '../src/hooks/usePointMachine';

export default function Counter() {
  const [points, dispatch] = usePointMachine(0)
  console.log('points :: ', points)
  return (
    <div className='block'>
      Points: {points.points}
      <br />
      <button onClick={() => dispatch({ type: 'correct-answer' })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
