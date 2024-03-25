export interface Species {
  name: string;
  url: string;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}
export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface VersionDetail {
  rarity: number;
  version: Species;
}
export interface HeldItem {
  item: Species;
  version_details: VersionDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}
export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  animated?: Sprites;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}

export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  moves: Move[];
  name: string;
  order: number;
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
