export default interface Tour {
    id: number;
    nombre: string;
    img_url: string;
    descripcion: string;
    duracion: number;
    guia: boolean;
    ratings: {
        puntuación: number; 
        comentario?: string;
    }[];
    ubicacion: string;
    puntoEncuentro: string;
    fechas: Date[];
    precio: number;
} 