import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'systemjs';
import lodash from 'lodash';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

System.set('app:React', { default: React, ...React })
System.set('app:ReactDOM', { default: ReactDOM, __useDefault: true })
System.set('app:lodash', { default: lodash, ...lodash })

System.addImportMap({
  imports: {
    React: 'app:React',
    ReactDOM: 'app:ReactDOM',
    lodash: 'app:lodash',
  },
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
