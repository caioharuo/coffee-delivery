import { Minus, Plus } from 'phosphor-react';

interface CounterProps {
  counter: number;
  decrease: () => void;
  increase: () => void;
}

export function Counter({ counter, decrease, increase }: CounterProps) {
  return (
    <div className="bg-gray-300 flex items-center justify-center gap-1 p-2 rounded-lg">
      <button type="button" onClick={decrease}>
        <Minus
          weight="bold"
          className="w-[0.875rem] h-[0.875rem] text-purple-500 transition-colors hover:text-purple-800"
        />
      </button>
      <span className="text-gray-800 flex items-center justify-center w-5 leading-snug">
        {counter}
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
