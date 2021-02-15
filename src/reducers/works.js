export const worksReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_WORK":
            return [...action.payload];
            case "EMPTY_WORKS":
                return action.payload;
        case "DELETE_WORK":
            return [...action.payload];
        default:
            return state;
    }
}