import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import deliveryImg from '../../assets/delivery.svg';

export function Success() {
  return (
    <div className="max-w-[1120px] mx-auto my-20 space-y-10">
      <div>
        <h2 className="text-yellow-600 font-extrabold font-cursive text-[2rem]">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] p-[1px] bg-gradient-to-br from-yellow-600 to-purple-500">
          <div className="p-10 bg-gray-50 rounded-tl-md rounded-br-md rounded-tr-[36px] rounded-bl-[36px] flex flex-col gap-8 overflow-hidden">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 inline-block bg-purple-500">
                <MapPin weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>
                  Entrega em{' '}
                  <span className="font-bold">
                    Rua João Daniel Martinelli, 102
                  </span>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 inline-block bg-yellow-600">
                <Timer weight="fill" className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>Previsão de entrega</span>
                <span className="font-bold">20 min - 30 min</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 inline-block bg-yellow-700">
                <CurrencyDollar className="text-white" />
              </div>
              <div className="flex flex-col">
                <span>Pagamento na entrega</span>
                <span className="font-bold">Cartão de Crédito</span>
              </div>
            </div>
          </div>
        </div>

        <img
          src={deliveryImg}
          alt="Um homem dirigindo uma moto para realizar a entrega do pedido"
        />
      </div>
    </div>
  );
}
