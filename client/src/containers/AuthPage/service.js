import axios from '../../api/axiosClient';
export const fetchLoginSuccess = async () => {
  const response = await axios.get('/auth/login/succes');
  return response;
};
