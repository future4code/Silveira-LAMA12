import { connection } from './Connection';
import BandaModel from "../Model/BandaModel";

const TABLE = 'NOME_TABELA_BANDAS'

export class BandaDataBase {

    public async PostBanda(banda: BandaModel) {
        try {


            await connection(TABLE).insert({
                id: banda.getId(),
                name: banda.getName(),
                music_genre: banda.getMusic_genre(),
                responsible: banda.getResponsible()
            })


        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async GetBandaByName(name: string) {
        try {

            const result = await connection(TABLE).select({ name })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}