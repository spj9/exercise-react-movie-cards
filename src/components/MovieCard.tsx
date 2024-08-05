import {ReactElement} from 'react';
import {IMovie} from '../resources/interfaces';
import '../css/index.css';

interface IMovieCardProps { movie: IMovie; onClick: (id: IMovie['id']) => void; }

export function MovieCard({movie, onClick}: IMovieCardProps): ReactElement {
  return (
    <article className='moviecard' onClick={() => onClick(movie.id)}>
      <div className='info-container'>
        <div>
          <h4>{movie.title}</h4>
          <h5>{movie.genre}</h5>
        </div>
        <p>{movie.rating}/5</p>
      </div>
        <p className='description'>{movie.description}</p>
    </article>
  );
}
