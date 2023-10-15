import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../../../shared/api/articles';
import Markdown from 'markdown-to-jsx'; // Asegúrate de instalar esta biblioteca
import { Code } from '../../../../shared/components/CodeBlock'

export const BlogView = () => {
  const { idBlog } = useParams();
  const [loading, setLoading] = useState(true);
  const [blogContent, setBlogContent] = useState('');
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        // Llamar al método para obtener el contenido del blog
        const response = await getBlogById(idBlog);

        // Verificar si la respuesta fue exitosa y contiene contenido
        // if (response.status === 200 && response.data && response.data.content) {
        // Utilizar una biblioteca (ReactMarkdown) para convertir Markdown a HTML
        setBlogContent(response.content);
        // } else {
        //   console.error('No se pudo cargar el contenido del blog');
        // }
      } catch (error) {
        console.error('Error al cargar el contenido del blog', error);
      } finally {
        setLoading(false); // Indicar que la carga ha finalizado
      }
    };

    // Llamar a la función de carga del blog
    fetchBlogContent();
  }, [idBlog]); 

  return (
    <div className="container">
      
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className="markdown-content prose">
          <Markdown
            // options={{overrides: { code}}}

            options={{
              overrides: {
                code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark
                  }
                }
              }
            }}

          >{blogContent}</Markdown>
        </div>
      )}
    </div>
  );
};