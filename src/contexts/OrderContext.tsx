import { ReactNode, createContext } from 'react';

interface OrderContextProviderProps {
  children: ReactNode;
}

export const OrderContext = createContext({});

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>;
}
