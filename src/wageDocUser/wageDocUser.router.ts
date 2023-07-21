import * as WageDocUserService from "./wageDocUser.service"
import express from "express"
import type { Request, Response } from "express"
import {body, validationResult} from "express-validator"

export const wageDocUserRouter = express.Router();

wageDocUserRouter.post("/", body("birthDate").isDate().toDate(), async (request:Request, response:Response)=>{
    console.log(request.body.firstName);
    var exists = WageDocUserService.getWageDocUser(request.body.id)
    const errors = validationResult(request);
    console.log(request.body);
    if(!errors.isEmpty()){
        return response.status(400).json({errors:errors.array()});
    }
    
    if(exists !== null){
        return response.status(409).json({ error: "User with this email already exists" })
    }

    try{
        const wageDocUser = request.body;
        const newWageDocUser = await WageDocUserService.registerWageDocUser(wageDocUser);
        return response.status(201).json(newWageDocUser)
    }
    catch(error:any){
        return response.status(500).json(error.message);
    }
})