import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MAX_RETRIES = 3;
const INITIAL_DELAY = 1000; // 1 second

export async function retryOperation<T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = INITIAL_DELAY,
): Promise<T> {
  try {
    const result = await operation();

    console.log(`Successful after ${MAX_RETRIES - retries + 1} attempt(s).`);

    return result;
  } catch (err) {
    if (retries > 0) {
      console.warn(`Retrying operation. Attempts left: ${retries}`);

      await new Promise((resolve) => setTimeout(resolve, delay));

      return retryOperation(operation, retries - 1, delay * 2);
    } else {
      console.error(
        `Failed to perform operation after ${MAX_RETRIES} attempts.`,
      );
      throw err;
    }
  }
}

export async function foo<T>(
  operation: () => Promise<T | Error>,
  retries = MAX_RETRIES,
  delay = INITIAL_DELAY,
): Promise<T | Error> {
  const result = await operation();

  if (result instanceof Error) {
    if (retries > 0) {
      console.warn(`Retrying operation. Attempts left: ${retries}`);

      await new Promise((resolve) => setTimeout(resolve, delay));

      return retryOperation(operation, retries - 1, delay * 2);
    } else {
      console.error(
        `Failed to perform operation after ${MAX_RETRIES} attempts.`,
      );
      return result
    }
  }

  console.log(`Successful after ${MAX_RETRIES - retries + 1} attempt(s).`);

  return result;
}
