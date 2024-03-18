import MainPages from '../pages/main-pages/main-pages';

type AppPlacesFoundProps = {
  countAmsterdam: number;
}

function App({countAmsterdam}: AppPlacesFoundProps): JSX.Element {
  return (
    <MainPages countAmsterdam={countAmsterdam}/>
  );
}

export default App;
