export interface Promos {
  idLong?:number;
  dateDebutPromo:Date;
  dateFinPromo:Date;
  typePromo: TypePromo;
}

export enum TypePromo {
  STANDARD = 'STANDARD',
  SPECIAL = 'SPECIAL',
}

export enum StatusPromo{
  EN_COURS = 'EN_COURS',
  TERMINE = 'TERMINE'
}
