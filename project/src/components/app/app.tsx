import FirstScreen from '../../pages/first-screen/first-screen';

type AppScreenProps = {
  title: string,
  genre: string,
  year: number
}

function App({title, genre, year}: AppScreenProps): JSX.Element {
  return (
    <FirstScreen title={title} genre={genre} year={year} />
  );
}

export default App;
