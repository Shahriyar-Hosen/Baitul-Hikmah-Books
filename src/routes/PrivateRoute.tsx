import { userInfoFromLocalstorage } from '@/utils/utils';
import { ReactNode } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
  const user = userInfoFromLocalstorage;

  if (!user) {
    toast.error('You are not authorized! Please login');
    return <Navigate to="/user/signin" />;
  }

  return children;
};

export default PrivateRoute;
