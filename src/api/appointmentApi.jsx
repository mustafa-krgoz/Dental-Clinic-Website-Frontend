import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v2/appointments';

export const createAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(API_URL, appointmentData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error("❌ Randevu API hatası:", error.response || error.message || error);
    throw error;
  }
};