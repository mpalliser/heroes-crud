interface Appearance {
  gender: string;
  'eye-color': string;
  'hair-color': string;
  height: string[];
  race: string;
  weight: string[];
}

export interface HeroeImmage {
  url: string;
}

export interface Heroe {
  id: string;
  name: string;
  image: HeroeImmage;
  appearance: Appearance;
}
