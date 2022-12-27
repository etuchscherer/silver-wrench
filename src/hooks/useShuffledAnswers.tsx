import { useMemo, useState } from 'react';
import { shuffle } from 'lodash';

function useShuffledAnswers(array: string[]): string[] {

  const shuffledAnswers = useMemo(() => shuffle(array), [array])
  return shuffledAnswers
}

export default useShuffledAnswers;
