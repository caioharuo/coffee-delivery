import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
  return (
    <div className="mx-40">
      <Header />
      <Outlet />
    </div>
  );
}
