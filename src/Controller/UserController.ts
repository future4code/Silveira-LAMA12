import { Request, Response } from "express"
import UserBusiness from "../Business/UserBusiness"
import UserModel from "../Model/UserModel"
import { ROLE } from "../Types/UniversalTypes"
import { userType } from "../Types/UserTypes"


export default class UserController {

    public async Signup(req: Request, res: Response) {

        // é necessário passar um email, um nome e uma senha, e também uma função dentro do sistema. 
        try {
            const { email, name, password } = req.body

            const userType: userType = { email, name, password }

            const userBussines = new UserBusiness()

            const token = await userBussines.Signup(userType)

            res.status(200).send({ token })
        } catch (err: any) {
            res.status(500).send({ message: err.message || err.sqlMessage })
        }
    }



}
