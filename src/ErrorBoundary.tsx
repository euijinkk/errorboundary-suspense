import React, { Component, PropsWithChildren } from "react";

export interface FallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

interface ErrorBoundaryProps {
  FallbackComponent: React.ComponentType<FallbackProps>;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  error: Error | null;
}

const initialState: ErrorBoundaryState = {
  error: null,
};

class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  resetErrorBoundary = () => {
    this.props.onReset?.();
    this.setState(initialState);
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render() {
    const { FallbackComponent } = this.props;

    if (this.state.error) {
      return (
        <FallbackComponent
          error={this.state.error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
