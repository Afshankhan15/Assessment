// import React, { Component, ErrorInfo, ReactNode } from "react";
import React, { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-aspire-white">
          <div className="text-center">
            <h1 className="text-title font-bold text-aspire-navy mb-4">
              Something went wrong
            </h1>

            <p className="text-sm text-aspire-black opacity-70 mb-6">
              An unexpected error occurred.
            </p>

            <button
              onClick={this.handleReload}
              className="px-4 py-2 bg-aspire-green text-white rounded-md hover:opacity-90 transition font-bold cursor-pointer"
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
