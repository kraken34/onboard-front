export class Produit {
  reference: string;
  nom: string;
  prix: number;
  photos: string[];
  quantite: number;
  caracteristiques: Caracteristiques;
  marques: Marques;
  discipline: Discipline;
  flex: number[];

  constructor(params: any) {
    Object.assign(this, params);
  }
}


export class Caracteristiques {
  longueur: number;
  largeur: number;
  poids: number;
  empatement: number[];
  largeurRoues: number[];
  constructor(params: any) {
    Object.assign(this, params);
  }
}

 export enum Marques {
  LOADED,
  MAJUSTUS,
  LANDYATCH,
  MOONSHINE,
  CARVER
 }

 export enum Discipline {
  DANCING,
  CRUISING,
  DOWNHILL,
  FREESTYLE
 }
