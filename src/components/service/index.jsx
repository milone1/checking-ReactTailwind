import Swal from 'sweetalert2';

const BASE_URL = 'https://www.api.infomatica.pe/api/getCodigoPasajero/801138/12';
export const getDataFromCodePassenger = async (url = BASE_URL) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(e) {
    Swal.fire(e.message)
  }
}


const BASE_URLPOST = "https://www.api.infomatica.pe/api/saveDatosPasajero2/"

export const storeForm = async (passenger) => {
  try {
    const response = await fetch(BASE_URLPOST, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passenger),
    });
    await response.json();
  } catch (e) {
    Swal.fire(e.message)
  }
};