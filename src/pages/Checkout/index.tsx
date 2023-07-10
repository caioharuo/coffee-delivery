import * as ToggleGroup from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { SelectedCoffeeCard } from './components/SelectedCoffeeCard';

export function Checkout() {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={() => navigate('/success')}
      className="w-full max-w-[1120px] mx-auto my-10 flex gap-8"
    >
      <div className="flex flex-col w-full max-w-[640px] gap-3">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold font-cursive">
            Complete seu pedido
          </h3>
          <div className="flex flex-col gap-8 bg-gray-100 rounded-md p-10">
            <div className="flex items-start gap-2">
              <MapPinLine className="w-[22px] h-[22px] text-yellow-700" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p className="text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="CEP"
                className="max-w-[200px] p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
              />

              <input
                type="text"
                placeholder="Rua"
                className="p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
              />

              <div className="w-full flex gap-3">
                <input
                  type="text"
                  placeholder="Número"
                  className="max-w-[200px] p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
                />
                <div className="group relative flex-1">
                  <input
                    type="text"
                    placeholder="Complemento"
                    id="additional"
                    className="w-full p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
                  />
                  <label
                    htmlFor="additional"
                    className="group-focus-within:invisible absolute text-xs italic text-gray-600 top-[14px] right-[14px]"
                  >
                    Opcional
                  </label>
                </div>
              </div>

              <div className="w-full flex gap-3">
                <input
                  type="text"
                  placeholder="Bairro"
                  className="max-w-[200px] p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  className="w-full p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
                />
                <input
                  type="text"
                  placeholder="UF"
                  className="max-w-[60px] p-3 rounded bg-gray-200 border border-gray-300 text-sm focus:outline-yellow-700 placeholder:text-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 bg-gray-100 rounded-md p-10">
            <div className="flex items-start gap-2">
              <MapPinLine className="w-[22px] h-[22px] text-purple-500" />
              <div>
                <h3>Pagamento</h3>
                <p className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div>
              <ToggleGroup.Root
                type="single"
                className="flex items-center justify-center gap-3"
              >
                <ToggleGroup.Item
                  value="credit-card"
                  className={classNames(
                    'flex-1 flex items-center justify-center gap-3 p-4 uppercase text-xs rounded-md border',
                    'data-[state=off]:bg-gray-200 data-[state=off]:border-purple-200',
                    'data-[state=on]:bg-purple-100 data-[state=on]:border-purple-500'
                  )}
                >
                  <CreditCard className="w-4 h-4 text-purple-500" />
                  <span>Cartão de crédito</span>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="debit-card"
                  className={classNames(
                    'flex-1 flex items-center justify-center gap-3 p-4 uppercase text-xs rounded-md border',
                    'data-[state=off]:bg-gray-200 data-[state=off]:border-purple-200',
                    'data-[state=on]:bg-purple-100 data-[state=on]:border-purple-500'
                  )}
                >
                  <Bank className="w-4 h-4 text-purple-500" />
                  <span>Cartão de débito</span>
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value="cash"
                  className={classNames(
                    'flex-1 flex items-center justify-center gap-3 p-4 uppercase text-xs rounded-md border',
                    'data-[state=off]:bg-gray-200 data-[state=off]:border-purple-200',
                    'data-[state=on]:bg-purple-100 data-[state=on]:border-purple-500'
                  )}
                >
                  <Money className="w-4 h-4 text-purple-500" />
                  <span>Dinheiro</span>
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold font-cursive">Cafés selecionados</h3>
          <div className="flex flex-col items-center bg-gray-100 rounded-md p-10">
            <div className="w-full">
              <>
                <SelectedCoffeeCard />
                <div className="w-full h-[1px] bg-gray-300 my-6" />
              </>

              <>
                <SelectedCoffeeCard />
                <div className="w-full h-[1px] bg-gray-300 my-6" />
              </>
            </div>

            <div className="w-full flex flex-col gap-3 mb-6">
              <div className="flex justify-between">
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div className="flex justify-between">
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-xl">Total</span>
                <span className="font-bold text-xl">R$ 33,20</span>
              </div>
            </div>

            <button
              type="submit"
              className="bg-yellow-600 text-white font-bold text-sm uppercase rounded-md py-3 w-full transition-colors hover:bg-yellow-700"
            >
              Confirmar pedido
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
