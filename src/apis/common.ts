import request from 'configs/axios';

export const uploadImage = (payload: FormData) => request.post('/upload', payload);
