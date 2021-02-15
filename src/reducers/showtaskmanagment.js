export const showtaskmanagmentReducer = (state=false, action) => {
    switch (action.type) {
        case "SHOW_TASK_MANAGMENT":
            return !state;
        default:
            return state;
    }
}