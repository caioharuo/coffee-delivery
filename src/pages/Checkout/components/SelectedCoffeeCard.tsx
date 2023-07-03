import { Trash } from 'phosphor-react';
import { Counter } from '../../../components/Counter';

export function SelectedCoffeeCard() {
  return (
    <div className="flex justify-between px-1 py-2">
      <div className="flex gap-5">
        <img
          src="/coffees/traditional-espresso.png"
          alt=""
          className="w-16 h-16"
        />
        <div className="space-y-2">
          <span>Expresso Tradicional</span>
          <div className="flex gap-2 max-h-8">
            <Counter />
            <button
              type="button"
              className="group bg-gray-300 flex items-center justify-center gap-1 px-2 rounded-lg uppercase text-xs transition-colors hover:bg-gray-400"
            >
              <Trash className="text-purple-500 group-hover:text-purple-800" />
              Remover
            </button>
          </div>
        </div>
      </div>
      <span className="font-bold">R$ 9,90</span>
    </div>
  );
}
