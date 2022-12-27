import axios from "axios";
import { useEffect, useState } from "react";
import { Question, useCurrentQuestion } from "../src/hooks/useCurrentQuestion";

function Test() {

  const [items, setItems ] = useState<string[]>([])
  const [firstItem, setFirstItem] = useState('')

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple')
    .then((_items) => {
      setItems(_items.data.results)

      setFirstItem(_items.data.results[0])
    })
  }, [])

  function onclick() {
    const updatedItems = items.length > 0 ? items.slice(1) : []
    setItems(updatedItems)
    setFirstItem(updatedItems[0])
    console.log('items', items);
  }

  if (!items.length) {
    return <p>No items</p>
  }

  return (
    <div>
      <button onClick={onclick}>Click</button>
      <h1>{firstItem.question}</h1>
    </div>
   );
}

export default Test;