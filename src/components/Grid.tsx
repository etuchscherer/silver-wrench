import React, { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import useShuffledAnswers from '../hooks/useShuffledAnswers';

interface Props {
  containerStyle?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  answers: string[]
  onSelect(answer: string): void
}

const Grid = ({ containerStyle, answers, onSelect }: Props) => {
  const [selection, setSelection] = useState(0);
  const shuffledAnswers = useShuffledAnswers(answers);

  function doSelection(number: number, shuffledAnswers: string[]) {
    setSelection(number)
    onSelect(shuffledAnswers[number])
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4" style={containerStyle}>
      <div className="row-start-1 row-end-2 col-start-2 col-end-3" onClick={() => doSelection(0, shuffledAnswers)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[0] }} />
      <div className="row-start-2 row-end-3 col-start-1 col-end-2" onClick={() => doSelection(1, shuffledAnswers)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[1] }} />
      <div className="row-start-2 row-end-3 col-start-2 col-end-3 bg-red-300" />
      <div className="row-start-2 row-end-3 col-start-3 col-end-4" onClick={() => doSelection(3, shuffledAnswers)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[2] }} />
      <div className="row-start-3 col-start-2 col-end-3" onClick={() => doSelection(2, shuffledAnswers)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[3] }} />
    </div>
  );
};

export default Grid;
