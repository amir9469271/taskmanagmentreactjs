import { v4 as uuidv4 } from 'uuid';

export const handledoworks = (event, fullnamework)=>{
    return async (dispatch , getState)=>{
        console.log(event);
        if (event.currentTarget.checked) {
            const dolistworks = [...getState().doworks]
            const dowork = {
                id: uuidv4(),
                fullnamedowork:fullnamework
            }
            dolistworks.push(dowork)
           await dispatch({type:"ADD_DO_WORK" , payload:dolistworks})

            const listnotworks = [...getState().donotworks]
            const finallist = listnotworks.filter(fi => fi.fullnamedonotwork !== fullnamework)
            await dispatch({type:"ADD_DONOTWORK" , payload:finallist})
        }
        else {
            const dolistworks = [...getState().doworks]
            const filtred = dolistworks.filter(d => d.fullnamedowork !== fullnamework)
            await dispatch({type:"ADD_DO_WORK" , payload:filtred})

            const dolistnotworks2 = [...getState().donotworks]
            const dolistnotw = {
                id: uuidv4(),
                fullnamedonotwork: fullnamework
            }
            dolistnotworks2.push(dolistnotw)
            await dispatch({type:"ADD_DONOTWORK" , payload:dolistnotworks2})
        }
    }
}