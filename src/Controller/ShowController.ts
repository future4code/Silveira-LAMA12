import { ShowBusiness } from './../Business/ShowBusiness';
import { Request, Response } from "express";
import { ShowCreate } from '../Types/ShowTypes';


export default class ShowController {


    public async AddShow(req: Request, res: Response) {
        try {
            const { dayOfTheWeek, start_time, end_time } = req.body
            const Authorization = req.header // o Authorization tem que vir o token da banda


            const showBusiness = new ShowBusiness()

            const shoywType: ShowCreate = {
                week_day: dayOfTheWeek,
                start_time1: start_time,
                end_time1: end_time,
                token: String(Authorization)
            }

            const token = await showBusiness.AddShow(shoywType)

            res.status(200).send({ token })


        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
    public async GetShowByDay(req: Request, res: Response) {
        try {
            const dayOfTheWeek = req.params


            const showBusiness = new ShowBusiness()

            const shows = await showBusiness.GetShowByDay(String(dayOfTheWeek))

            res.status(200).send({ shows })

        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
}