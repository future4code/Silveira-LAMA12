

export default class ShowModel {
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getBand_id(): string {
        return this.band_id;
    }
    public setBand_id(value: string) {
        this.band_id = value;
    }
    public getEnd_time(): number {
        return this.end_time;
    }
    public setEnd_time(value: number) {
        this.end_time = value;
    }
    public getStart_time(): number {
        return this.start_time;
    }
    public setStart_time(value: number) {
        this.start_time = value;
    }
    public getWeek_day(): string {
        return this.week_day;
    }
    public setWeek_day(value: string) {
        this.week_day = value;
    }

    constructor(
        private id: string = id,
        private week_day: string = week_day,
        private start_time: number = start_time,
        private end_time: number = end_time,
        private band_id: string = band_id
    ) { }
}