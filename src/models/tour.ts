export default interface Tour {
    id: number;
    nombre: string;
    thumbnail: string;
    img_url: string;
    img2: string;
    img3: string;
    descripcion: string;
    duracion: number;
    guia: boolean;
    ratings: {
        puntuacion: number; 
        comentario?: string;
    }[];
    ubicacion: string;
    puntoEncuentro: string;
    fechas: Date[];
    precio: number;
    tag?: string;
} 