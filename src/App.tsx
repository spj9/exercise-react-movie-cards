import {useState} from 'react';
import {Addmovie} from './components/Addmovie';
import {MovieList} from './components/MovieList';
import {IMovie} from './resources/interfaces';

export function App() {
  const [addedMovies, setAddedMovies] = useState<IMovie[]>([]);
  return (
    <main>
      <Addmovie setAddedMovies={setAddedMovies} />
      <MovieList addedMovies={addedMovies} setAddedMovies={setAddedMovies} />
    </main>
  );
}
