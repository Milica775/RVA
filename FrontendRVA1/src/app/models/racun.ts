import { TipRacuna } from './tipRacuna';
import { Klijent } from './klijent';

export class Racun {
  id: number;
  naziv: string;
  oznaka: string;
  opis: string;
  tipRacuna: TipRacuna;
  klijent: Klijent;
}
