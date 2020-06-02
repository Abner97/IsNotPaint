import React, { lazy, Suspense } from 'react';

const LazyPaintedCanvas = lazy(() => import('./PaintedCanvas'));

const PaintedCanvas = props => (
  <Suspense fallback={null}>
    <LazyPaintedCanvas {...props} />
  </Suspense>
);

export default PaintedCanvas;
