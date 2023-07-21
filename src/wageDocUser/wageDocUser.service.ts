import { Role } from "@prisma/client";
import { db } from "../utils/db.server";




type WageDocUser = {
    id:number
    firstName: string;
    lastName: string;
    email: string;
    password: string
    phoneNumber: string;
    birthDate: Date
    socialInsuranceNumber: string;
    role: Role;
}

export const registerWageDocUser = async(
    wageDocUser: Omit<WageDocUser, "id">): Promise<WageDocUser>=> {
        const {firstName,lastName ,email,password,birthDate,phoneNumber,socialInsuranceNumber,role} = wageDocUser;
        return db.wageDocUser.create({
            data:{
                firstName,
                lastName,
                email,
                password,
                birthDate,
                phoneNumber,
                socialInsuranceNumber,
                role
            },
            select:{
                id:true,
                firstName: true,
                lastName: true,
                email: true,
                password: true,
                birthDate: true,
                phoneNumber: true,
                socialInsuranceNumber: true,
                role: true
            }
    })
}


export const getWageDocUser =async (id:number): Promise<WageDocUser | null> => {
    return db.wageDocUser.findFirst({
        where:{
            id:id
        }
    })
    
}
    
