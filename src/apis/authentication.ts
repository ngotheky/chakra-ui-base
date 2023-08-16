import request from 'configs/axios';
import { ISignInForm } from 'utils/interface';

export const login = (form: ISignInForm) => request.post('/auth/login', form);
