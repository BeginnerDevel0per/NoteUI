import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Localization } from './app/context/localization/Localization';
import { Theme } from './app/context/theme/Theme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Localization>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme >
    </BrowserRouter>
  </Localization>
);

