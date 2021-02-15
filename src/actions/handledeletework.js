export const handledeletework = (workId, fullnamework)=>{
    return async (dispatch , getState)=>{
        const works = [...getState().works]
        const filtredWork = works.filter(w => w.id !== workId)
       await dispatch({type:"DELETE_WORK" , payload:filtredWork})

        const dolistworks = [...getState().doworks]
        const filtred = dolistworks.filter(d => d.fullnamedowork !== fullnamework)
        await dispatch({type:"DELETE_DO_WORK" , payload:filtred})

        const listnotworks = [...getState().donotworks]
        const finallist = listnotworks.filter(fi => fi.fullnamedonotwork !== fullnamework)
       await dispatch({type:"DELETE_DONOTWORK" , payload:finallist})
    }
}