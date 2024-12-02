import { FC, lazy, LazyExoticComponent, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export type AppRoute = {
  key: string;
  path: string;
  isPrivate?: boolean;
  skipIfAuthenticated?: boolean;
  LazyComponent?: LazyExoticComponent<FC>;
  isLazyRoute?: boolean;
  Component?: ReactElement;
};

const LoginPage = lazy(() => import('./Pages/Auth/Login/Login'));
const RegisterPage = lazy(() => import('./Pages/Auth/Register/Register'));
const DashboardPage = lazy(() => import('./Pages/Dashboard/Dashboard'));
const KarStudioGuide = lazy(() => import('./Pages/Guide/KarStudioGuide'));
const Plans = lazy(() => import('./Pages/Plans/Plans'));
const EditorPage = lazy(() => import('./Pages/MyProjects/MyProjects'));
const CreateProject = lazy(() => import('./Pages/CreateProject/CreateProject'));

export const routes: AppRoute[] = [
  {
    key: 'login',
    path: '/login',
    skipIfAuthenticated: true,
    LazyComponent: LoginPage,
    isLazyRoute: true,
  },
  {
    key: 'register',
    path: '/register',
    skipIfAuthenticated: true,
    LazyComponent: RegisterPage,
    isLazyRoute: true,
  },
  {
    key: 'guide',
    path: '/guide',
    isPrivate: true,
    LazyComponent: KarStudioGuide,
    isLazyRoute: true,
  },
  {
    key: 'editor',
    path: '/editor',
    isPrivate: true,
    LazyComponent: EditorPage,
    isLazyRoute: true,
  },
  {
    key: 'editor',
    path: '/editor/new',
    isPrivate: true,
    LazyComponent: CreateProject,
    isLazyRoute: true,
  },
  {
    key: 'dashboard',
    path: '/',
    isPrivate: false,
    LazyComponent: DashboardPage,
    isLazyRoute: true,
  },
  {
    key: 'plans',
    path: '/plans',
    isPrivate: false,
    LazyComponent: Plans,
    isLazyRoute: true,
  },
  {
    key: '404',
    path: '*',
    isPrivate: false,
    isLazyRoute: false,
    Component: <Navigate to="/" />,
  },
];
