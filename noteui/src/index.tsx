import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Localization } from './app/context/localization/Localization';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Localization>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Localization>
);

