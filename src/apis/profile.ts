import request from 'configs/axios';

export const getProfile = () => request.post('user/profile');
