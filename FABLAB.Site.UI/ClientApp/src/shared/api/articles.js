export async function getNotice(){
  try {
    const response = await fetch("api/article/notice");
    const result = response.json();
    return await result
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los datos:', error);
    throw error; // Lanzar el error nuevamente para manejarlo en el componente
  }
}

export async function getBlogById(id){
  try {
    const response = await fetch("api/article/notice/"+id);
    const result = response.json();
    return await result
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los datos:', error);
    throw error; // Lanzar el error nuevamente para manejarlo en el componente
  }
}

export async function postArticle(body) {
  try {
    const response = await fetch("api/article", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}