

export const donotworksReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_DONOTWORK":
            return [...action.payload];
            case "EMPTY_WORKS":
                return action.payload;
        case "DELETE_DONOTWORK":
            return [...action.payload];
        default:
            return state;
    }
}