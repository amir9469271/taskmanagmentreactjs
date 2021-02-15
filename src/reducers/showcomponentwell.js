export const showcomponentwellReducer = (state=true , action)=>{
    switch(action.type){
        case "SHOW_COMPONENT_WELL":
            return !state;
            default:
                return state;
    }
}