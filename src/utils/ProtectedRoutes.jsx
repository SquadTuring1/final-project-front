import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthUser } from '../features/auth/authSlice';
import Home from '../pages/Home';

const ProtectedRoutes = () => {
  const { token } = useSelector(getAuthUser);

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
