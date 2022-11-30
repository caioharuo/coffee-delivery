import logoImg from '../assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <img src={logoImg} alt="" />

      <div className="flex gap-3">
        <div className="flex bg-purple-100 p-2 gap-1 rounded-lg">
          <MapPin className="text-purple-500" size={22} weight="fill" />
          <span className="text-purple-800 text-sm">Porto Alegre, RS</span>
        </div>

        <button className="bg-yellow-100 p-2 gap-1 rounded-lg">
          <ShoppingCart className="text-yellow-700" size={22} weight="fill" />
        </button>
      </div>
    </header>
  );
}
