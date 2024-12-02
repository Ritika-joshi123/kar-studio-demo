import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Storage } from '../Utils';
import { OverlayLoader } from '../Components';

type AuthContextType = {
  token?: string | null;
  authUser?: AuthUser | null;
  isAuthenticated: boolean;
  logout: () => void;
  login: (token: string, user: AuthUser) => void;
};

type AuthUser = {
  email: string;
  first_name: string;
  last_name: string;
};

const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<AuthUser | null>();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const { token, user } = Storage.getAuthData();

    if (user && token && token.trim() !== '') {
      setToken(token);
      setAuthUser(user);
      setIsAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  const loginUser = (newToken: string, user: AuthUser): void => {
    setToken(newToken);
    setAuthUser(user);
    setIsAuthenticated(true);
    setIsLoading(false);
    Storage.saveAuthData(newToken, user);
  };

  const logoutUser = (): void => {
    setIsAuthenticated(false);
    setToken(null);
    setAuthUser(null);
    Storage.clearAuthData();
  };

  if (isLoading) {
    return <OverlayLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        authUser,
        login: loginUser,
        logout: logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthentication = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuthentication must be used within an AuthContextProvider'
    );
  }

  return context;
};

export { AuthContextProvider, useAuthentication };
