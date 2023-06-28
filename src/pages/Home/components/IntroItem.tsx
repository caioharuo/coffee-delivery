import { ReactElement } from 'react';

interface IntroItemProps {
  iconBgColor: string;
  icon: ReactElement;
  text: string;
}

export function IntroItem({ iconBgColor, icon, text }: IntroItemProps) {
  return (
    <div className="flex gap-3 items-center">
      <div className={`p-2 inline-block rounded-full ${iconBgColor}`}>
        {icon}
      </div>
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}
