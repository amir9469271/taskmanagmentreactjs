export const doworksReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_DO_WORK":
            return [...action.payload];
            case "EMPTY_WORKS":
                return action.payload;
        case "DELETE_DO_WORK":
            return [...action.payload];
        default:
            return state;
    }
}