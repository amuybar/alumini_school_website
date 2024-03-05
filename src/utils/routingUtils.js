// routingUtils.js
import { useNavigate as useReactNavigate } from 'react-router-dom';

const useNavigate = () => {
  const navigate = useReactNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return { navigateTo };
};

export default useNavigate;
