import { ReactNode, createContext, useState } from 'react';
import { Coffee } from '../@types/coffee';

interface OrderContextProviderProps {
  children: ReactNode;
}

type Item = {
  coffee: Coffee;
  amount: number;
};

type Order = Array<Item>;

interface OrderContextType {
  addToOrder: (coffee: Coffee, amount: number) => void;
  order: Order;
  totalOrder: number;
}

export const OrderContext = createContext({} as OrderContextType);

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>([]);

  function addToOrder(coffee: Coffee, amount: number) {
    const coffeeAlreadyInOrder = order.find(
      ({ coffee: orderCoffee }) => orderCoffee.id === coffee.id
    );

    if (coffeeAlreadyInOrder) {
      const updatedAmountOrder = order.map((orderCoffee) =>
        orderCoffee.coffee.id === coffee.id
          ? { ...orderCoffee, amount }
          : orderCoffee
      );

      setOrder(updatedAmountOrder);
    } else {
      setOrder((state) => [...state, { coffee, amount }]);
    }
  }

  const totalOrder = order.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <OrderContext.Provider value={{ addToOrder, order, totalOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
