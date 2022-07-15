import { Authenticator } from './../Services/Authenticator';
import { IdGenerator } from './../Services/IdGenerator';
import BandaModel from "../Model/BandaModel";
import { BandaCreate } from "../Types/BandTypes";
import { BandaDataBase } from '../Data/BandaDataBase';
import { authenticationData, ROLE } from '../Types/UniversalTypes';



export class BandaBusiness {

    public async AddBanda(banda: BandaCreate, Authorization: string) {

        const { name, music_genre, responsible } = banda

        if (!name || !music_genre || !responsible) {
            throw new Error('name, gender ou responsible nao informados')
        }
        if (!Authorization) {
            throw new Error('favor inserir a Authorization')
        }
        const authenticator = new Authenticator()

        const authorizationInfo = authenticator.getTokenData(Authorization)

        if (authorizationInfo.role === ROLE.NORMAL) {
            throw new Error('voce nao tem permisao para adicionar uma banda')
        }



        const idGenerator = new IdGenerator()

        const id = idGenerator.generateId()

        const bandaModel = new BandaModel(id, name, music_genre, responsible)

        const bandaDB = new BandaDataBase()

        await bandaDB.PostBanda(bandaModel)


        const tokenInfo: authenticationData = {
            id,
            role: ROLE.NORMAL
        }
        const token = authenticator.generateToken(tokenInfo)

        return token



    }

    public async GetBandaInfo(nameBanda: string) {

        if (!nameBanda) {
            throw new Error('favor inserir nome da banda')
        }

        const bandaDB = new BandaDataBase()

        const infoBanda = await bandaDB.GetBandaByName(nameBanda)

        if (!infoBanda) {
            throw new Error('banda nao encontrada')
        }

        return infoBanda


    }


}
