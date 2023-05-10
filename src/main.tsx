import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import { AuthProvider } from './hooks/auth'
import { CartProvider } from './hooks/cart'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
