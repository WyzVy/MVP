import { Evento } from "./evento";

export class Objeto {
    constructor(
        public id: number,
        public descripcion: String,
        public zona: String,
        public evento: Evento
    ){}
}
