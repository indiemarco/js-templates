import Pokemon from './Pokemon';

const pokemons: Array<string> = ['pikachu', 'ditto', 'bulbasaur', 'mewtwo'];

function Pokemons(): JSX.Element {
  return (
    <div className="Pokemons">
      {pokemons.map((pokemon, index) => (
        <Pokemon key={index} name={pokemon} />
      ))}
    </div>
  );
}

export default Pokemons;
