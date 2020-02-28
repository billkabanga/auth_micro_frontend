import * as yup from 'yup';


const authValidation = yup.object().shape({
  username: yup.string()
    .max(40, 'Please enter no more than 40 characters')
    .required('Please enter your name'),
  
    email: yup.string()
      .email('Pleaae enter a valid email')
      .required('Please enter an email'),

    password: yup.string()
      .required('No password provided')
      .min(8, 'Password is too short - should be 8 characters minimum')
})

export default authValidation;

