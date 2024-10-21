import 'bootstrap/dist/css/bootstrap.min.css';
import MisRutas from './routes/MisRutas.jsx';
import { ErrorFallback } from './components/ErrorFallback.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

export const App = () => {
  return (
<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
      <MisRutas />
    </ErrorBoundary>
  );
};