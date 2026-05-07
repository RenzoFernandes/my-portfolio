import React from 'react'
import ReactDOM from 'react-dom/client'
import { ViteReactSSG } from 'vite-react-ssg/single-page'
import App from './App'
import './index.css'

export const createRoot = ViteReactSSG(<App />)

if (import.meta.env.DEV) {
  const container = document.getElementById('root')!
  const root = ReactDOM.createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

