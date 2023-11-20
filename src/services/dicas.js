import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3334/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export function postDicas(data) {
  return api.post('/dicas', data)
    .then(response => {
      alert("Dica enviada com sucesso!")
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}

export function getDicas() {
  return api.get(`/dicas`)
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      throw error;
    });
}