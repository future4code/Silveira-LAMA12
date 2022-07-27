import ShowModel from "../Model/ShowModel"
import { connection } from "./Connection"


const TABLE = 'NOME_TABELA_SHOWS'

export class ShowDataBase {

    public async AddShow(show: ShowModel) {
        try {
            console.log(show);
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


    public async getShowByHourEnd(start_time: number, week_day: string) {
        try {
            const result = await connection(TABLE).where({ start_time: start_time, week_day: week_day })
            console.log(result);
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
            console.log('==============');
            const result = await connection(TABLE).where({ week_day }).orderBy('start_time', 'asc')
            console.log(result);

            return result


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}

function start_time(start_time: any) {
    throw new Error("Function not implemented.")
}
