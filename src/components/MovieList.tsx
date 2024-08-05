import {Dispatch, ReactElement, SetStateAction} from 'react';
import {IMovie} from '../resources/interfaces';
import {MovieCard} from './MovieCard';
import '../css/index.css';

type TMovieListProps = { setAddedMovies: Dispatch<SetStateAction<IMovie[]>>; addedMovies: IMovie[]; };

export function MovieList({ setAddedMovies, addedMovies, }: TMovieListProps): ReactElement {
  const onCardClick = (id: string) => setAddedMovies(prev => prev.filter(m => m.id !== id));
  return (
    <section className='movielist'>
      {addedMovies.map((movie, idx) => ( <MovieCard key={`${movie.title}-${idx}`} movie={movie} onClick={onCardClick} /> ))}
    </section>
  );
}
