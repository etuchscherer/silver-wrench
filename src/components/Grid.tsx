import React, { DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useState } from 'react';
import { useInput } from '../hooks/useInput';
import useShuffledAnswers from '../hooks/useShuffledAnswers';

interface Props {
  containerStyle?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  answers: string[]
  onSelect(answer: string): void
}

const inputMap: { [key: string]: number} = {
  ArrowUp: 0,
  ArrowDown: 3,
  ArrowLeft: 1,
  ArrowRight: 2,
}

const Grid = ({ containerStyle, answers, onSelect }: Props) => {
  const input = useInput()
  const [selection, setSelection] = useState(0);
  const shuffledAnswers = useShuffledAnswers(answers);

  const doSelection = useCallback((number: number) => {
    setSelection(number)
    onSelect(shuffledAnswers[number])
  }, [shuffledAnswers, onSelect])

  useEffect(() => {
    const selectedItem = inputMap[input];
    if ([0,1,2,3].includes(selectedItem)) {
      doSelection(selectedItem)
    }
  }, [input, shuffledAnswers, doSelection])

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4" style={containerStyle}>
      <div title='0' className="row-start-1 row-end-2 col-start-2 col-end-3 self-end mb-5" onClick={() => doSelection(0)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[0] }} />
      <div title='1' className="row-start-2 row-end-3 col-start-1 col-end-2 self-center justify-self-end" onClick={() => doSelection(1)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[1] }} />
      <div className="row-start-2 row-end-3 col-start-2 col-end-3" style={{ backgroundImage: "url(/images/compass-transparent.png)", minHeight: 200, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
      <div title='2' className="row-start-2 row-end-3 col-start-3 col-end-4 self-center justify-self-start" onClick={() => doSelection(2)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[2] }} />
      <div title='3' className="row-start-3 col-start-2 col-end-3 mt-5" onClick={() => doSelection(3)} dangerouslySetInnerHTML={{ __html: shuffledAnswers[3] }} />
    </div>
  );
};

export default Grid;
