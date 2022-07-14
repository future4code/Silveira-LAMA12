import { authenticationData } from './../Types/UniversalTypes';
import * as jwt from "jsonwebtoken";
// import { authenticationData } from "../Types/UniversalTypes";
export class Authenticator {

    generateToken(info: authenticationData): string {

        const token = jwt.sign(
            {
                id: info.id,
                role: info.role
                
            },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.EXPIRES_IN }
        )
        return token;
    }

    getTokenData(token: string): authenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as authenticationData

    }
}