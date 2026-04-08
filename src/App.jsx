import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'//RUTA PROTEGIDA
import { Navigate } from 'react-router-dom' //NAVEGACION
import NavBar from './components/NavBar'
import LoginPage from './pages/LoginPage'
import MenuPage from './pages/MenuPage'
import CartaPage from './pages/CartaPage'
import ComandasPages from './pages/ComandasPage'
import MesasPage from './pages/MesasPage'
import DetalleMesa from './pages/DetallesMesa'
import NotFound from './pages/NotFound'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Ruta por defecto enviara al login*/}
        <Route path="/" element={<Navigate to='/login' replace />} />
        {/*Rutas protegidas*/}
        <Route path="/login" element={<><LoginPage /></>} />
        <Route path="/menu" element={<ProtectedRoute><MenuPage /></ProtectedRoute>} />
        <Route path="/comandas" element={<ProtectedRoute><ComandasPages /></ProtectedRoute>} />
        <Route path="/carta" element={<ProtectedRoute><CartaPage /></ProtectedRoute>} />
        <Route path="/mesas" element={<ProtectedRoute><MesasPage /></ProtectedRoute>} />
        <Route path='/mesas/:id' element={<ProtectedRoute><DetalleMesa /></ProtectedRoute>} />
        {/*Ruta en caso de que no haya pagina*/}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
