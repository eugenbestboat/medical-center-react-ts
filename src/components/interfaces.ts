export type AriaPressedType = boolean | "false" | "true" | "mixed" | undefined;

export type ServicesType =
  | "Crutches"
  | "X-ray"
  | "Pulmonary"
  | "Cardiology"
  | "Dental Care";

export interface InfoLink {
    label?: string;
    href?: string;
    content?: string;
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
    color: string;
    block?: IServiceBlock;
    doctors?: ICard[];
  }