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