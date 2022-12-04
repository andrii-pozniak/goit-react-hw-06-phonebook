import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import {  theme } from "./theme";
import {ThemeProvider} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <BrowserRouter basename='/goit-react-hw-06-phonebook'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>       
      </ThemeProvider>
    </BrowserRouter>    
  </React.StrictMode>
);