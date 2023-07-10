import { ShoppingCart } from 'phosphor-react';
import { Counter } from '../../../components/Counter';

export type Coffee = {
  id: number;
  name: string;
  description: string;
  imageFilename: string;
  tags: string[];
  price: number;
};

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { name, description, imageFilename, price, tags } = coffee;

  return (
    <div className="max-w-[256px] flex flex-col items-center bg-gray-100 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] px-6 pb-5">
      <img
        src={`/coffees/${imageFilename}`}
        alt=""
        className="w-[120px] relative -top-4"
      />
      <div className="flex items-center justify-center gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mb-4 uppercase text-[0.625rem] font-bold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold font-cursive text-gray-800">{name}</h3>
      <p className="text-sm text-center text-gray-600 mb-8">{description}</p>

      <div className="w-full flex justify-between items-center">
        <span className="text-sm">
          R${' '}
          <span className="text-2xl font-cursive font-extrabold">
            {Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </span>

        <div className="flex gap-2 items-center">
          <Counter />
          <button className="p-2 bg-purple-800 rounded-md">
            <ShoppingCart
              weight="fill"
              className="text-white w-[22px] h-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
