export type AriaPressedType = boolean | "false" | "true" | "mixed" | undefined;
export type ServicesType =
  | "Crutches"
  | "X-ray"
  | "Pulmonary"
  | "Cardiology"
  | "Dental Care";

  export interface Plan {
    price: number;
    title: string;
    doctors: number | string;
    patients: number | string;
  }

export interface INavLink {
  name: string;
}

interface IServiceBlock {
  src?: string;
  title: string;
  description: string;
}

export interface ICard {
 id:number;
  src: string;
  title: string;
  position:string;
  description?: string; 
}

export interface IService {
  id?: number;
  src: string;
  title: ServicesType | string;
  block?: IServiceBlock;
  doctors?: ICard[];
}

export interface InfoLink {
  label?: string;
  href?: string;
  content?: string;
}
export interface ILinksBlock {
  title: string;
  links: InfoLink[];
}
export interface IBlog {
  id?: number;
  src?: string;
  href?: string;
  title: string;
  description: string;
}

export interface AboutCard {
  srcImg: string;
  description: string;
  title: string;
  subTitle: string;
  color: string;
}