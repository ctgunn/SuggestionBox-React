import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './js/redux/config/configureStore'
import './index.css';
import App from './js/App';

const renderApp = () =>
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );

if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./js/App', renderApp);
}

renderApp();
