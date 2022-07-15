import { ShowDataBase } from './../Data/ShowDataBase';
import { DAY_OF_THE_WEEK, ShowCreate } from "../Types/ShowTypes";
import ShowModel from '../Model/ShowModel';
import { Authenticator } from '../Services/Authenticator';
import { IdGenerator } from '../Services/IdGenerator';
import { ROLE } from '../Types/UniversalTypes';



export class ShowBusiness {
    public async AddShow(show: ShowCreate) {

        const { week_day, start_time1, end_time1, token } = show

        if (!week_day || !start_time1 || !end_time1) {
            throw new Error('week_day, start_time ou end_time, nao informados, favor repita ')
        }
        const start_time = Number(start_time1)
        const end_time = Number(end_time1)

        if (start_time < 8 || end_time < 9 || start_time > 23 || end_time > 24) {
            throw new Error('os horarios de inicio e fim devem estar entre 8 e 24')
        }


        if (!token) {
            throw new Error('token de Authorization nao informados, favor inserir')
        }

        if (
            week_day === DAY_OF_THE_WEEK.FRIDAY ||
            week_day === DAY_OF_THE_WEEK.SATURDAY ||
            week_day === DAY_OF_THE_WEEK.SUNDAY
        ) {
            throw new Error('dia da semana errados , favor inserir, sexta ou sabado ou domingo')
        }

        const showDB = new ShowDataBase()

        const resultShowStart = await showDB.getShowByHourStart(start_time, week_day)

        if (!resultShowStart) {
            throw new Error(' Ja existe um Show nessa hora')
        }
        const autenticator = new Authenticator()
        const band_id = autenticator.getTokenData(token)

        const idGenerator = new IdGenerator()

        const id = idGenerator.generateId()

        const show1 = new ShowModel(id, week_day, start_time, end_time, band_id.id)

        await showDB.AddShow(show1)

        const token1 = autenticator.generateToken({ id, role: ROLE.NORMAL })

        return token1


    }

    public async GetShowByDay(week_day: string) {


        if (
            week_day === DAY_OF_THE_WEEK.FRIDAY ||
            week_day === DAY_OF_THE_WEEK.SATURDAY ||
            week_day === DAY_OF_THE_WEEK.SUNDAY
        ) {
            throw new Error('dia da semana errados , favor inserir, sexta ou sabado ou domingo')
        }

        const showDB = new ShowDataBase()

        const shows = await showDB.ShowByDay(week_day)

        return shows

    }
}