import { add_vacation_type, delete_vacation_type, IAddVacation, IDeleteVacation, Ivacation } from "./types";

export function AddVacationAction(vacation:Ivacation):IAddVacation{
    return{
        type:add_vacation_type,
        payload:{
            vacation
        }
    }
}

export function DeleteVacationAction(index:number):IDeleteVacation{
    return{
        type:delete_vacation_type,
        payload:{
            index
        }
    }
}