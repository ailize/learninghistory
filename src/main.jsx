import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './assets/fonts/iconfont.css'
// import './assets/fonts/iconfont.css'
import './assets/styles/reset.css'
// import './modules/rem' // 自适应(废弃版)
// import 'swiper/dist/css/swiper.min.css'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)