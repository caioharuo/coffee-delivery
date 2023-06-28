import { CoffeeCard } from './CoffeeCard';
import { coffees } from '../../../db/coffees.json';

export function CoffeeList() {
  return (
    <div className="grid grid-cols-4 gap-y-10 pb-40">
      {coffees.map((coffee) => {
        return <CoffeeCard key={coffee.id} coffee={coffee} />;
      })}
    </div>
  );
}
