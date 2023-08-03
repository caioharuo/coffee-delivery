import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.svg';
import { OrderContext } from '../contexts/OrderContext';

export function Header() {
  const { totalOrder } = useContext(OrderContext);

  return (
    <header className="flex items-center justify-between max-w-[1120px] mx-auto py-8">
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <div className="flex gap-3">
        <div className="flex bg-purple-100 p-2 gap-1 rounded-lg">
          <MapPin className="text-purple-500" size={22} weight="fill" />
          <span className="text-purple-800 text-sm">Porto Alegre, RS</span>
        </div>

        <Link
          to="/checkout"
          className="bg-yellow-100 p-2 gap-1 rounded-lg relative"
        >
          <ShoppingCart className="text-yellow-700" size={22} weight="fill" />
          <span className="bg-yellow-700 text-white text-xs font-bold w-5 h-5 rounded-full absolute -top-2 -right-2 flex items-center justify-center">
            {totalOrder}
          </span>
        </Link>
      </div>
    </header>
  );
}
