import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, ChildrenType } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
} & ChildrenType;

function PrivateRoute({
  authorizationStatus,
  children,
}: PrivateRouteProps): JSX.Element {
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
