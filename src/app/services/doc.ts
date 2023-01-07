import { Lnaguage } from './language';

export interface Doc {
  name: string;
  hostName: string;
  languages: Lnaguage[];
}
