import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import BookStoreService from './services/book-store-service.js'
import {BookStoreServiceProvider} from './components/bookstore-service-context'
import store from './store'

const bookStoreService = new BookStoreService()

ReactDom.render((
    <Provider store={store}>
        <ErrorBoundry>
            <BookStoreServiceProvider value={bookStoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>
), document.getElementById('root'))