export const Handleaddwork = (event)=>{
    return async dispatch =>{
        await dispatch({type:"SET_WORK" , payload: event.target.value})
    }
}