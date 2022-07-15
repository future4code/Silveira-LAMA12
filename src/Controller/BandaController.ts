import { BandaBusiness } from './../Business/BandaBusiness';
import { Request, Response } from "express";
import { BandaCreate } from '../Types/BandTypes';




export default class BandaController {


    public async AddBanda(req: Request, res: Response) {

        try {
            const { name, gender, responsible } = req.body

            const Authorization = req.header


            const infoBanda: BandaCreate = {
                name,
                music_genre: gender,
                responsible
            }

            const bandaBusiness = new BandaBusiness()

            const token = await bandaBusiness.AddBanda(infoBanda, String(Authorization))

            res.status(200).send({ token })
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }


    }


    public async GetBanda(req: Request, res: Response) {
        try {
            const nameBanda = req.params.nameBanda
            const bandaBusiness = new BandaBusiness()
            const bandaInfo = await bandaBusiness.GetBandaInfo(String(nameBanda))
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }
}