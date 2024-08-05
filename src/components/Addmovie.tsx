import {Dispatch, FormEventHandler, ReactElement, SetStateAction, useRef, } from 'react';
import {IMovie} from '../resources/interfaces';
import {genres, ratings} from '../resources/constants';
import {Tgenre, Trating} from '../resources/types';
import '../css/index.css';

type TAddMovieProps = { setAddedMovies: Dispatch<SetStateAction<IMovie[]>>; };

export function AddMovie({setAddedMovies}: TAddMovieProps): ReactElement {
  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formProps = Object.fromEntries(formData);
      setAddedMovies(prev => [ ...prev,
        { title: formProps.title as string,
          rating: parseInt(formProps.rating as string) as Trating,
          genre: formProps.genre as Tgenre,
          description: formProps.description as string,
          id: Date.now().toString(),
        },
      ]);

    formRef.current?.reset();
  };

  return (
    <section className='add-movie'>
      <form ref={formRef} onSubmit={onSubmit} className='form'>
        <div className='input-container'>
          <label htmlFor='title'>Title</label>
          <input name='title' id='title' required minLength={1} />
        </div>
        <div className='input-container'>
          <label htmlFor='rating'>Rating</label>
          <div className='range-container'>
            <input name='rating' required type='range' id='rating' min={1} max={5} step={1} list='markers' />
              <datalist id='markers'>
                {ratings.map(r => ( <option key={r} label={r.toString()} value={r}></option> )) }
              </datalist>
          </div>
        </div>
        <div className='input-container'>
          <label htmlFor='genre'>Genre</label>
          <select name='genre' required id='genre'>
            <option className='select-items' value={''}>--Choose a genre--</option>
              {genres.map(g => ( <option className='select-items' key={g} value={g}>{g}</option> )) }
          </select>
        </div>
        <div className='input-container'>
          <label htmlFor='descript'>Description</label>
          <textarea name='description' id='descript' />
        </div>
        <div className='btns-container'>
          <button type='reset' id='clear'>Clear</button>
          <button id='add' type='submit'>Add</button>
        </div>
      </form>
    </section>
  );
}
