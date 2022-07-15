export default class BandaModel {
    public getResponsible(): string {
        return this.responsible;
    }
    public setResponsible(value: string) {
        this.responsible = value;
    }
    public getMusic_genre(): string {
        return this.music_genre;
    }
    public setMusic_genre(value: string) {
        this.music_genre = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    constructor(
        private id: string = id,
        private name: string = name,
        private music_genre: string = music_genre,
        private responsible: string = responsible
    ) { }
}