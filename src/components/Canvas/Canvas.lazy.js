import React, { lazy, Suspense } from 'react';

const LazyCanvas = lazy(() => import('./Canvas'));

const Canvas = props => (
  <Suspense fallback={null}>
    <LazyCanvas {...props} />
  </Suspense>
);

export default Canvas;
