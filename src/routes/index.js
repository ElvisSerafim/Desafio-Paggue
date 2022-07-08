import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';

import SignRoute from './SignRoute';
import ManagementRoute from './ManagementRoute';

const AppRoutes = () => {
 const { signed } = useContext(AuthContext);
 console.log(signed);
 return signed ? <ManagementRoute /> : <SignRoute />;
};

export default AppRoutes;