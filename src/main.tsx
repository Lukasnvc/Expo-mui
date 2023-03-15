import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App'
import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShowProvider } from './contexts/ShowContext';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ShowProvider>
          <App />
        </ShowProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
