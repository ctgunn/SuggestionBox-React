import React from 'react';
import { Provider } from 'react-redux'
import './index.css';
import App from './js/App';
import configureAppStore from "./js/redux/config/configureStore";
import {createRoot} from "react-dom/client";

const store = configureAppStore();

const renderApp = () =>
    createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
    );

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./js/App', renderApp);
}

renderApp();
