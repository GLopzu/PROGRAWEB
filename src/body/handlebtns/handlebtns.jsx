
import React, { useState } from 'react';
import Counter from '../counter/counter';
import PlusBtn from '../plusbutton/plusbutton';
import MinusBtn from '../minusbutton/minusbutton';

function HandleBtns() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <PlusBtn handleClick={handleIncrement} />
      <MinusBtn handleClick={handleDecrement} disabled={count === 0} />
      <Counter count={count} />
    </div>
  );
}

export default HandleBtns;
