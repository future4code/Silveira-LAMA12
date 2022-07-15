import dotenv from "dotenv";
import { app } from "./app";
import { UserBusiness } from "./Business/UserBusiness";
import BandaController from "./Controller/BandaController";
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
app.post('/login', userController.login)



// ===========================

const showController = new ShowController()

app.post('/show', showController.AddShow)
app.get('/show/:dayOfTheWeek', showController.GetShowByDay)


// ===========================
const bandaController = new BandaController()

app.post('/banda', bandaController.AddBanda)
app.get('/banda/:nameBanda', bandaController.GetBanda)


/*


token de user : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhYTRkMTYwLWUyNmEtNDA1OC04MThmLWY4NDMwNDZiYjJmYyIsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNjU3OTE1NDY2LCJleHAiOjE2NTg2MjEwNjZ9.cbz24Pc5I5NkICm_-rykKvBQH0lcPmFi9GV2b-b2E44

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjdhYTRkMTYwLWUyNmEtNDA1OC04MThmLWY4NDMwNDZiYjJmYyIsInJvbGUiOiJhZG1pbmlzdHJhZG9yIiwiaWF0IjoxNjU3OTE1OTc4LCJleHAiOjE2NTg2MjE1Nzh9.w0KREo7W9RkkSQxLrR_pVdXaOuZBRvGLbbMzVdWXcjQ

*/