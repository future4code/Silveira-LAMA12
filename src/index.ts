import dotenv from "dotenv";
import { app } from "./app";
import { UserBusiness } from "./Business/UserBusiness";
import ShowController from "./Controller/ShowController";

import UserController from "./Controller/UserController";
import { UserDatabase } from "./Data/UserDatabase";
import { Authenticator } from "./Services/Authenticator";
import { hashManager } from "./Services/hashManager";
import { IdGenerator } from "./Services/IdGenerator";



dotenv.config();


const userBusines = new UserBusiness(new IdGenerator, new hashManager, new UserDatabase, new Authenticator)


const userController = new UserController(userBusines)


app.post('/signup', userController.signUp)





// ===========================

const showController = new ShowController()

app.post('/show', showController.AddShow)

app.get('/show/:dayOfTheWeek', showController.GetShowByDay)