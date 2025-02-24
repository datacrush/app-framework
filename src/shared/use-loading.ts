import { useState, useCallback } from "react";

export const useLoading = <T extends (...args: any[]) => Promise<any>>(
  asyncFunction: T
) => {
  const [loading, setLoading] = useState(false);

  const wrappedFunction = useCallback(
    async (...args: Parameters<T>) => {
      setLoading(true);
      try {
        const result = await asyncFunction(...args);
        return result;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  return [wrappedFunction, loading] as const;
};
