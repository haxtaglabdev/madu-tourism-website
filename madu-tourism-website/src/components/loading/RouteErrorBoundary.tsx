import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * RouteErrorBoundary prevents lazy chunk-load failures from trapping the user in a loading state.
 */
export default class RouteErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Route load error caught by RouteErrorBoundary:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <p className="mb-4 text-base text-charcoal">
            Unable to load this section. Please check your connection.
          </p>
          <button
            className="rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
            onClick={() => window.location.reload()}
            type="button"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
