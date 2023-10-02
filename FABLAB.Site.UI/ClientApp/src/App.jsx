import { Routes, Route } from 'react-router-dom'
import Public from './views/public'
import Private from './views/private'
import './index.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/*' element={<Public />}/>
        <Route path='/lab/*' element={<Private />}/>
        
      </Routes>
    </>
  )
}

export default App
