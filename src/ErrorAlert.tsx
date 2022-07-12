import { FallbackProps } from "./ErrorBoundary";

const ErrorAlert = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div>
      <div>{error.message}</div>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};

export default ErrorAlert;
