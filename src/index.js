import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import 'regenerator-runtime/runtime'
import store from './redux/stores/store'
import axios from "axios";

axios.defaults.baseURL =
    "https://us-central1-anarat-91221.cloudfunctions.net/api";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
)
