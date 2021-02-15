export const EmptyListWorks =() =>{
    return async(dispatch) =>{
        await dispatch({type:"EMPTY_WORKS", payload:""})
    }
}