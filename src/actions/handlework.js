export const clearWork = () =>{
    return async dispatch =>{
        await dispatch({type:"CLEAR_WORK" , payload:""})
    }
}
// export const cleardonotWork = () =>{
//     return async dispatch =>{
//         await dispatch({type:"CLEAR_DONOTWORKS" , payload:""})
//     }
// }