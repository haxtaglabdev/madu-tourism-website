import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import LoadingScreen from "./LoadingScreen";

interface LoadingContextType {
  startLoading: () => void;
  stopLoading: () => void;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextType | null>(null);

/**
 * Clean LoadingProvider without any artificial delays, fake minimum durations, or timeouts.
 * Only displays when an async task explicitly requests it.
 */
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [activeCount, setActiveCount] = useState(0);

  const startLoading = useCallback(() => {
    setActiveCount((c) => c + 1);
  }, []);

  const stopLoading = useCallback(() => {
    setActiveCount((c) => Math.max(0, c - 1));
  }, []);

  const isLoading = activeCount > 0;

  return (
    <LoadingContext.Provider
      value={{
        startLoading,
        stopLoading,
        isLoading,
      }}
    >
      {children}
      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  );
}

export function useLoading(): LoadingContextType {
  const context = useContext(LoadingContext);
  if (!context) {
    return {
      startLoading: () => {},
      stopLoading: () => {},
      isLoading: false,
    };
  }
  return context;
}
