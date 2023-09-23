import { Routes, Route } from 'react-router-dom'
import Public from './views/public/Public.jsx'
import Admin from './views/admin/Admin.jsx'
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Public />}/>
        <Route path='/admin/*' element={<Admin />}/>
        
      </Routes>
    </>
  )
}

export default App
