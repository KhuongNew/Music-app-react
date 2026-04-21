import axiosClient from './axiosClient';

export async function getSongs() {
  const response = await axiosClient.get('/songs');
  return response.data;
}

export async function createSong(payload) {
  const response = await axiosClient.post('/songs', payload);
  return response.data;
}

export async function updateSong(id, payload) {
  const response = await axiosClient.put(`/songs/${id}`, payload);
  return response.data;
}

export async function deleteSong(id) {
  await axiosClient.delete(`/songs/${id}`);
}
