import { useState } from 'react';
import { shuffle } from 'lodash';

function useShuffledAnswers(array: string[]): string[] {
  return shuffle(array);
}

export default useShuffledAnswers;
