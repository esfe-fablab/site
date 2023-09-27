import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getNotice } from '../../../../shared/api/articles';

const Blog = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Llamar a la función para obtener noticias cuando el componente se monte
    async function fetchNotices() {
      try {
        const data = await getNotice();
        console.log(data)
        setNotices(data);
      } catch (error) {
        // Manejo de errores
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchNotices();
  }, []);

  return (
    <section>
      <div className='mt-9 mb-3'>
        <h1 className='mt-6 text-5xl text-center'>Blog</h1>
      </div>

      <div className='container-cards'>
        {notices.map((notice) => (
          <Card key={notice.id} title={notice.title} description={notice.description} user={notice.systemUser} id={notice.id}/>
        ))}
      </div>
    </section>
  );
};

export default Blog;
