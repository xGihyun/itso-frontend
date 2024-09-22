import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function camelCaseToHeader(str: string): string {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}
