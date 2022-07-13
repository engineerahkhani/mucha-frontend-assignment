import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const SearchPage = loadable(() => import('./screens/Search'));
const HistoryPage = loadable(() => import('./screens/History'));
const NotFound = loadable(() => import('./screens/NotFound'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
