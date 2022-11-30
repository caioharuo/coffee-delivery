import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';

import heroImg from '../assets/hero.png';
import { IntroItem } from '../components/IntroItem';

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
    <div className="flex justify-center py-24 bg-background">
      <main className="max-w-[1120px] flex gap-14 justify-center ">
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="font-cursive font-extrabold text-5xl leading-tight">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="text-xl">
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
      </main>
    </div>
  );
}
