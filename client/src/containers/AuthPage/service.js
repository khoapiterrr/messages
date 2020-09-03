import axios from '../../api/axiosClient';

export const fetchLoginSuccess = async () => {
  const response = await axios.get('/auth/login/succes');
  return response;
};

export const registerAccount = async ({
  firstname,
  lastname,
  email,
  password,
  gender,
  birthday,
}) => {
  const response = await axios.post('/auth/signin/', {
    firstname,
    lastname,
    email,
    password,
    gender,
    birthday,
  });
  return response;
};
