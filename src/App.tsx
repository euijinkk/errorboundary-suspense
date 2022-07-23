import { Suspense } from "react";
import ErrorAlert from "./ErrorAlert";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";
import Todos from "./Todos";

function App() {
  return (
    <ErrorBoundary fallback={({ error }) => <ErrorAlert error={error} />}>
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
