import ShowModel from "../Model/ShowModel"
import { connection } from "./Connection"


const TABLE = 'NOME_TABELA_BANDAS'

export class ShowDataBase {

    public async AddShow(show: ShowModel) {
        try {
            await connection(TABLE)
                .insert({
                    id: show.getId(),
                    week_day: show.getWeek_day(),
                    start_time: show.getStart_time(),
                    end_time: show.getEnd_time(),
                    band_id: show.getBand_id()
                })

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }


    public async getShowByHourEnd(end_time: number, week_day: string) {
        try {
            const result = await connection(TABLE).where({ end_time: end_time, week_day: week_day })

            return result



        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    public async getShowByHourStart(start_time: number, week_day: string) {
        try {
            const result = await connection(TABLE).where({ start_time: start_time, week_day: week_day })

            return result


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async ShowByDay(week_day: string) {
        try {
            const result = await connection(TABLE).select(week_day).orderBy('start_time', 'asc')

            return result


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

function start_time(start_time: any) {
    throw new Error("Function not implemented.")
}
