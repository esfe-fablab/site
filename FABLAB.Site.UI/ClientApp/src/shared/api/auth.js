const url = "api/auth"
export async function authAdmin(body) {
  try {
    const response = await fetch(`${url}/get`, {
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

export async function verify(token) {
  try {
    const response = await fetch(`${url}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Agrega tu token de autorización aquí
      }
    });
    if(!response.ok) return {error:true}
    const data = await response.json();
    return data;
  } catch (error) {
    // Manejar el error de la petición
    console.error(error);
  }
}
