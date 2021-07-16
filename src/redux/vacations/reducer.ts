import { add_vacation_type, delete_vacation_type, IVacationsState, VacationsTypes } from "./types";


const initalState:IVacationsState=[]

const VacationsReducer=(state=initalState ,action:VacationsTypes,):IVacationsState=>{
    switch(action.type){
        case add_vacation_type:
            return [...state,action.payload.vacation];
        case delete_vacation_type:
            return state.filter((_,i)=>i!==action.payload.index);
        default:
            return state;
    }
}
export default VacationsReducer;