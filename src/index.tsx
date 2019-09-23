import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { initStore } from './store'
import { Provider } from 'react-redux'

const store = initStore()

const element = (
    <div>
        <Provider store={store}>
        <App />
        </Provider>
    </div>
);
ReactDOM.render(element, document.getElementById('root'))

serviceWorker.unregister()
