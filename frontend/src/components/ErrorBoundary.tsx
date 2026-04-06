import React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-50 to-white flex items-center justify-center z-50 p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6 border border-orange-100">
            <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-orange-500" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">
                Something went wrong
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                An unexpected error occurred. Don't worry — your data is safe.
                Click below to return to the homepage.
              </p>
            </div>
            {this.state.error && (
              <details className="text-left bg-gray-50 rounded-lg p-3 text-xs text-gray-400 cursor-pointer">
                <summary className="font-medium text-gray-500">
                  Error details
                </summary>
                <pre className="mt-2 whitespace-pre-wrap break-words">
                  {this.state.error.message}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <RotateCcw className="h-4 w-4" />
              Back to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
