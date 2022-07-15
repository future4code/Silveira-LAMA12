import { Authenticator } from './../Services/Authenticator';
import { IdGenerator } from './../Services/IdGenerator';
import BandaModel from "../Model/BandaModel";
import { BandaCreate } from "../Types/BandTypes";
import { BandaDataBase } from '../Data/BandaDataBase';
import { authenticationData, ROLE } from '../Types/UniversalTypes';



export class BandaBusiness {

    public async AddBanda(banda: BandaCreate, token: string) {

        const { name, music_genre, responsible } = banda

        if (!name || !music_genre || !responsible) {
            throw new Error('name, gender ou responsible nao informados')
        }
        if (!token) {
            throw new Error('favor inserir a Authorization')
        }

        const authenticator = new Authenticator()

        const authorizationInfo = authenticator.getTokenData(String(token)) //String(Authorization)






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
        const token1 = authenticator.generateToken(tokenInfo)

        return token1



    }

    public async GetBandaInfo(nameBanda: string) {

        if (!nameBanda) {
            throw new Error('favor inserir nome da banda')
        }

        const bandaDB = new BandaDataBase()

        const infoBanda = await bandaDB.GetBandaByName(nameBanda)
        console.log('passou aqui');
        if (!infoBanda) {
            throw new Error('banda nao encontrada')
        }

        return infoBanda


    }


}
