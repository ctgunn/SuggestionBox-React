import React from 'react';
import {Provider} from 'react-redux'
import './index.css';
import App from './js/App';
import configureAppStore from "./js/redux/config/configureStore";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
const store = configureAppStore();

const renderApp = () =>
    createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );

// @ts-ignore
if (process.env.NODE_ENV !== 'production' && module.hot) {
    // @ts-ignore
    module.hot.accept('./js/App', renderApp);
}

renderApp();
