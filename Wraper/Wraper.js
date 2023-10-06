'use client'
import React from 'react'
import {store} from '@/store/store.js';
import {Provider} from 'react-redux'
const wraper = ({children}) => {
  return (
    <div>
        <Provider store={store}>
        {children}
        </Provider>
    </div>
  )
}

export default wraper