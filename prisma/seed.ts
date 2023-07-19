import { db } from "../src/utils/db.server";

enum Role{
    ADMIN,
    COMPANYOWNER,
    EMPLOYEE
}

type WageDocUser = {
    firstName: string
    lastName: string
    email: string
    password: string
    birthDate: Date
    socialInsuranceNumber: string
    phoneNumber: string
    role: Role
}

async function seed(){
    await Promise.all(
        getAdminWageDocUser().map((adminUser) =>{
            return db.wageDocUser.create({
                data:{
                    firstName:adminUser.firstName,
                    lastName:adminUser.lastName,
                    email:adminUser.email,
                    password: adminUser.password,
                    birthDate:adminUser.birthDate,
                    phoneNumber:adminUser.phoneNumber,
                    socialInsuranceNumber:adminUser.socialInsuranceNumber,
                    role:"ADMIN"
                }
        }
    )
   }))
}

seed()

function getAdminWageDocUser(): Array<WageDocUser>{
    return [
    {
        firstName:"Cemil",
        lastName:"Aslan",
        email:"aslancemil09@gmail.com",
        password:"aaa",
        socialInsuranceNumber:"3581 200302",
        birthDate: new Date(),
        phoneNumber:"+43 664 1840791",
        role: Role.ADMIN
    }
]
}