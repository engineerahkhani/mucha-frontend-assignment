import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import ThemeProvider from '../contexts/Theme';
import { BrowserRouter } from 'react-router-dom';
import LanguageProvider from '../contexts/Language';

function render(ui, { preloadedState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <LanguageProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
