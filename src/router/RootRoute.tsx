import { Flex, Spinner } from '@chakra-ui/react';
import paths from 'configs/paths';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import useProfile from 'shared/hooks/useProfile';
import MainLayout from 'shared/layouts/MainLayout';

// root
const HomePage = lazy(() => import('modules/home/pages/HomePage'));
const SettingsPage = lazy(() => import('modules/setting/pages/SettingsPage'));
const EventPage = lazy(() => import('modules/event/pages/EventPage'));
const CreateEventPage = lazy(() => import('modules/event/pages/CreateEventPage'));
const EventHistoryPage = lazy(() => import('modules/event/pages/EventHistoryPage'));
const MemberPage = lazy(() => import('modules/member/pages/MemberPage'));

// root routes
const rootRoutes = [
  {
    name: i18next.t('home.title'),
    path: paths.HOME.ROOT,
    element: <HomePage />,
  },
  {
    name: i18next.t('event.title'),
    path: paths.EVENT.ROOT,
    element: <EventPage />,
  },
  {
    name: i18next.t('event.createEvent'),
    path: paths.EVENT.CREATE,
    element: <CreateEventPage />,
  },
  {
    name: i18next.t('event.eventHistory'),
    path: paths.EVENT.HISTORY,
    element: <EventHistoryPage />,
  },
  {
    name: i18next.t('member.title'),
    path: paths.MEMBER.ROOT,
    element: <MemberPage />,
  },
  {
    name: i18next.t('setting.title'),
    path: paths.SETTINGS.ROOT,
    element: <SettingsPage />,
  },
];

const RootRoute = () => {
  const token = Cookies.get('token');
  const { data: profile, isFetching } = useProfile();

  if (!token && !profile && !isFetching) return <Navigate to={paths.AUTH.SIGN_IN} />;

  return (
    <MainLayout>
      <Suspense
        fallback={
          <Flex justifyContent="center" pt={2}>
            <Spinner size="lg" />
          </Flex>
        }
      >
        <Routes>
          {rootRoutes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </Suspense>
    </MainLayout>
  );
};

export default RootRoute;
