import * as React from 'react'

export const useInput = () => {

  const [lastInput, setLastInput] = React.useState('')

  const downHandler = ({ key }: { key: string}) => {
    setLastInput(key)
  }

  React.useEffect(() => {
    global.window.addEventListener('keydown', downHandler);

    return () => {
      global.window.removeEventListener('keydown', downHandler);
    }
  }, [])

  return lastInput
}