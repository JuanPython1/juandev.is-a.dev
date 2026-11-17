import '@/index.css'
import '@/i18n'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/AppRouter'
import { initSpotlight } from '@/lib/spotlight'

initSpotlight()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
