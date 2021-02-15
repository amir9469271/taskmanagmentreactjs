export const doworkReducer = (state = "", action) => {
    switch (action.type) {
        case "SET_DO_WORK":
            return action.payload;
        case "CLEAR_DO_WORK":
            return action.payload;
        default:
            return state;
    }
}