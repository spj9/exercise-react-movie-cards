import {useState} from 'react';
import {AddMovie} from './components/AddMovie';
import {MovieList} from './components/MovieList';
import {IMovie} from './resources/interfaces';

export function App() {
  const [addedMovies, setAddedMovies] = useState<IMovie[]>([]);
  return (
    <main>
      <AddMovie setAddedMovies={setAddedMovies} />
      <MovieList addedMovies={addedMovies} setAddedMovies={setAddedMovies} />
    </main>
  );
}
