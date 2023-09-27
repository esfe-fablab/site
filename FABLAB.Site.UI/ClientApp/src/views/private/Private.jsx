import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { verify } from '../../shared/api/auth';

function Admin() {
  const authResult = JSON.parse(localStorage.getItem('authResult'));
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(authResult){
          
          const data = await verify(authResult);
          console.log(data)
          if(!data.error){
            setValidate(true);
          }
        }
        setLoading(false)
      } catch (error) {
        console.error('Error al obtener los datos de concursos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="admin">
      {
          loading
          ?<h1>cargando...</h1> 
          :<Routes>
            {
              validate ? (
                <Route path="/*" element={<Dashboard />} />
              ) : (
                <Route path="/" element={<Navigate to="login" />} />
              )
            }

          <Route path="login" element={<Login />} />
  
          <Route path="*" element={<h1>No existe</h1>} />
        </Routes>
          
      }
      
    </div>
  );
}

export default Admin;
