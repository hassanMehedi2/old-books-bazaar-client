import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProvider>
      <RouterProvider router={routes}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </AuthProvider>
</QueryClientProvider>
  </React.StrictMode>,
)
