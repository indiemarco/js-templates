import Login from 'src/features/Login';
import Pokemons from 'src/features/Pokemons';
import AppBar from 'src/components/AppBar';
import { Route } from 'wouter';

export default function App(): JSX.Element {
  return (
    <>
      <AppBar />
      <Route path="/" component={Login} />
      <Route path="/pokemon" component={Pokemons} />
    </>
  );
}
