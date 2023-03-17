import * as Yup from 'yup';

import { UserRegister } from '../../api/userTypes';

export const registerFormInitialValues: UserRegister = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirm_password: '',
}

export const registerValidationSchema: Yup.ObjectSchema<UserRegister> = Yup.object().shape(
  {
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().email('Email should contain @').required('Required'),
    
    password: Yup.string().required('Password is required').min(5, 'Your password is too short.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match')

  }
)