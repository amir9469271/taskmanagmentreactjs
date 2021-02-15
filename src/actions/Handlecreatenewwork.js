import { clearWork } from "./handlework";
import { v4 as uuidv4 } from 'uuid';

export const Handlecreatenewwork = (fullnamework,fullnamedonotwork)=>{
    return async (dispatch , getState)=>{
        if (fullnamework !== "") {
            const works = [...getState().works];
            const work = {
                id: uuidv4(),
                fullnamework
            }
            works.push(work)
           await dispatch({type:"ADD_WORK" , payload:works})
            await dispatch(clearWork())
        }
        if (fullnamedonotwork !== "") {
            const dolistnotworks = [...getState().donotworks]
            const dolistnotwork = {
                id: uuidv4(),
                fullnamedonotwork
            }
            dolistnotworks.push(dolistnotwork)
            await dispatch({type:"ADD_DONOTWORK" , payload:dolistnotworks})
            
        }
    }
}