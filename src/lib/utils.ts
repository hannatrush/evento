import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getCityName(city: string) {
  if (city === 'all') {
    return 'All Events';
  } else {
    const hasSpace = city.includes('%20');

    if (hasSpace) {
      return `Events in ${city
        .split('%20')
        .map((item) => capitalize(item))
        .join(' ')}`;
    } else {
      return `Events in ${capitalize(city)}`;
    }
  }
}
