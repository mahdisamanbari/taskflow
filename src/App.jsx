import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route 
        path='/'
         element={
          <MainLayout>
              <Dashboard/>
          </MainLayout>
         }
          />
        <Route path='*' element={<NotFound/>} />

      </Routes>
   </BrowserRouter>
  )
}

export default App