import React, { useState } from 'react';
import { postArticle } from '../../../shared/api/articles';

export const AddArticle = () => {
  const [formData, setFormData] = useState({
    Title: '',
    Content: '',
    Description: '',
    Keywords: '',
    ArticleStateId: 1,
    ArticleTypeId: 2,
    SystemUserId: 2,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llama al método postArticle para guardar los datos
    await postArticle(formData);
    window.location.assign('/blog/');
      
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Crear un nuevo artículo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="Title" className="block text-gray-700">Título del artículo:</label>
          <input
            type="text"
            id="Title"
            name="Title"
            value={formData.Title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Content" className="block text-gray-700">Contenido del artículo:</label>
          <textarea
            id="Content"
            name="Content"
            value={formData.Content}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Description" className="block text-gray-700">Descripción del artículo:</label>
          <input
            type="text"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* <div className="mb-4">
          <label htmlFor="Keywords" className="block text-gray-700">Palabras clave del artículo:</label>
          <input
            type="text"
            id="Keywords"
            name="Keywords"
            value={formData.Keywords}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div> */}
        <div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Guardar artículo
          </button>
        </div>
      </form>
    </div>
  );
};
