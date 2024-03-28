import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute, ChildrenType } from '../../const';

function NotFound({ children }: ChildrenType): JSX.Element {
  return (
    <section className="container">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      {children}
      <section>
        <h1>404. Page not found</h1>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </section>
    </section>
  );
}
export default NotFound;
