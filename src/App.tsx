import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { OrderContextProvider } from './contexts/OrderContext';

function App() {
  return (
    <OrderContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </OrderContextProvider>
  );
}

export default App;
