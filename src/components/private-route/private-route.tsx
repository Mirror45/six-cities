import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/reducer/authorization-user-process/selectors';
import { store } from '../../store';
import { checkAuthAction } from '../../store/action/api-actions';

type PrivateRouteProps = {
  children: JSX.Element;
}

store.dispatch(checkAuthAction());

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn} />
  );
}
export default PrivateRoute;
