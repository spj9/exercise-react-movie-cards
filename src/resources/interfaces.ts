import {Tgenre, Trating} from './types';

export interface IMovie {
  title: string;
  rating: Trating;
  genre: Tgenre;
  description: string;
  id: string;
}
