import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Loader from './Components/Loader.jsx';

// Lazy load the App component
const LazyApp = React.lazy(() => import('./App.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <LazyApp />
    </Suspense>
  </StrictMode>,
);
