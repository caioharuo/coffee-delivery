import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import heroImg from '../../assets/hero.png';
import { IntroItem } from './components/IntroItem';
import { CoffeeList } from './components/CoffeeList';

const introItems = [
  {
    iconBgColor: 'bg-yellow-700',
    icon: <ShoppingCart className="text-white" weight="fill" size={16} />,
    text: 'Compra simples e segura',
  },
  {
    iconBgColor: 'bg-gray-700',
    icon: <Package className="text-white" weight="fill" size={16} />,
    text: 'Embalagem mantém o café intacto',
  },
  {
    iconBgColor: 'bg-yellow-600',
    icon: <Timer className="text-white" weight="fill" size={16} />,
    text: 'Entrega rápida e rastreada',
  },
  {
    iconBgColor: 'bg-purple-500',
    icon: <Coffee className="text-white" weight="fill" size={16} />,
    text: 'O café chega fresquinho até você',
  },
];

export function Home() {
  return (
    <div className="m-auto flex flex-col items-center bg-no-repeat bg-cover">
      <div className="bg-background w-full py-24">
        <div className="max-w-[1120px] m-auto flex gap-14 justify-center">
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="font-cursive font-extrabold text-5xl leading-tight text-gray-900">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <p className="text-xl text-gray-800">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-16">
              {introItems.map((item, index) => (
                <IntroItem
                  key={index}
                  iconBgColor={item.iconBgColor}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </div>

          <img src={heroImg} alt="" />
        </div>
      </div>

      <div className="w-full max-w-[1120px] space-y-8">
        <h2 className="font-cursive font-extrabold text-2xl text-gray-800">
          Nosso cafés
        </h2>
        <CoffeeList />
      </div>
    </div>
  );
}
