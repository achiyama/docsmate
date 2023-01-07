import { Language } from './language';

export interface Doc {
  name: string;
  hostName: string;
  regex: string;
  languages: Language[];
}
