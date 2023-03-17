import * as Yup from 'yup';

import { UserLogin } from '../../api/userTypes';

export const loginFormInitialValues: UserLogin = {
  email: '',
  password: '',
}

export const loginValidationSchema: Yup.ObjectSchema<UserLogin> = Yup.object().shape(
  {
    email: Yup.string().email('Email should contain @').required('Required'),
    password: Yup.string().required('Required')
  }
)