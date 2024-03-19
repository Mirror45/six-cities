import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Logo from '../../logo/logo';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="container">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <header>
        <Logo />
      </header>
      <section>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
}
export default NotFoundScreen;
