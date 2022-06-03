export interface IPet {
    nombre: string;
    edad: number;
    raza: string;
    tipo: string;
}

export interface IOwner {
    nombre: string;
    correo: string;
    edad: number;
    mascotas: IPet[];
}

export interface IVeterinarian {
    nombre: string;
    correo: string;
    edad: number;
}
