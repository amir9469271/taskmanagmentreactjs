export const donotworkReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_WORK":
            return action.payload;
        case "CLEAR_DONOTWORKS":
            return action.payload;
        default:
            return state;
    }
}