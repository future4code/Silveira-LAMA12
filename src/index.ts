import dotenv from "dotenv";
import { application } from "express";
import { app } from "./app";
import UserController from "./Controller/UserController";


dotenv.config();

const userController = new UserController()
app.post('/signup', userController.Signup)