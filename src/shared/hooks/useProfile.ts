import { useQuery } from '@tanstack/react-query';
import request from 'configs/axios';
import Cookies from 'js-cookie';
import { IUserProfile } from 'utils/interface';

const useProfile = () => {
  const token = Cookies.get('token');
  return useQuery({
    queryKey: ['user/profile', token],
    queryFn: async (): Promise<IUserProfile> => (await request.post('user/profile')).data,
    enabled: !!token,
  });
};
export default useProfile;
