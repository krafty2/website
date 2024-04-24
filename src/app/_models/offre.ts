export interface Offre {
    idLong?: number;
    bouquet: string;
    montant: number;
    promo:Promo;
}

export enum Promo {
    STANDARD = 'STANDARD',
    SPECIAL = 'SPECIAL',
  }
