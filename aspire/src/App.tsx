import { ErrorBoundary } from "./components/error-boundary";
import { AppRouter } from "./router/app-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <ErrorBoundary>
      <Toaster position="top-center" />
      <AppRouter />
    </ErrorBoundary>
  );
}

export default App;
