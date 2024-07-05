export interface Offre {
  idLong?: number;
  bouquet: string;
  montant: number;
  prixDecodeur: number;
  prixParabole: number;
  prixInstallation: number;
  savDecodeur: number;
  minMois: number;
}

export enum Promo {
  STANDARD = 'STANDARD',
  SPECIAL = 'SPECIAL',
}
