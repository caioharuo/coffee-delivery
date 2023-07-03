import { Minus, Plus } from 'phosphor-react';
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="bg-gray-300 flex items-center justify-center gap-1 p-2 rounded-lg">
      <button type="button" onClick={decrease}>
        <Minus
          weight="bold"
          className="w-[0.875rem] h-[0.875rem] text-purple-500 transition-colors hover:text-purple-800"
        />
      </button>
      <span className="text-gray-800 flex items-center justify-center w-5 leading-snug">
        {count}
      </span>
      <button type="button" onClick={increase}>
        <Plus
          weight="bold"
          className="w-[0.875rem] h-[0.875rem] text-purple-500 transition-colors hover:text-purple-800"
        />
      </button>
    </div>
  );
}
