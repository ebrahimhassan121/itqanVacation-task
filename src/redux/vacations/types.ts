
export const add_vacation_type="add-vacation";
export const delete_vacation_type="delete-vacation";

export interface Ivacation{
    name:string,
    department_name:string,
    phone?:string,
    start_date:Date,
    requested_days:number,
}
export type IVacationsState=Ivacation[];
export interface IAddVacation{
    type:typeof add_vacation_type,
    payload:{vacation:Ivacation}
}
export interface IDeleteVacation{
    type:typeof delete_vacation_type,
    payload:{index:number}}


export type VacationsTypes=IAddVacation|IDeleteVacation

