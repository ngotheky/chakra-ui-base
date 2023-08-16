import paths from 'configs/paths';
import i18next from 'i18next';

import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootRoute from 'router/RootRoute';

// authentication
const SignInPage = lazy(() => import('modules/authentication/pages/SignInPage'));
const SignUpPage = lazy(() => import('modules/authentication/pages/SignUpPage'));

// auth routes
const authRoutes = [
  {
    name: i18next.t('signIn.title'),
    path: paths.AUTH.SIGN_IN,
    element: <SignInPage />,
  },
  {
    name: i18next.t('signUp.title'),
    path: paths.AUTH.SIGN_UP,
    element: <SignUpPage />,
  },
];

const Router = () => {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route path="/*" element={<RootRoute />} />
    </Routes>
  );
};

export default Router;
