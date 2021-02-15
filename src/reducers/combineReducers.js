import { combineReducers } from "redux";
import { worksReducer } from './works';
import { workReducer } from './work';
import { doworksReducer } from './doworks';
import { doworkReducer } from './dowork';
import { donotworksReducer } from './donotworks';
import { donotworkReducer } from './donotwork';
import { showcomponentwellReducer } from './showcomponentwell';
import { showtaskmanagmentReducer } from './showtaskmanagment';
import { coursesReducer } from './courses';
import { courseReducer } from './course';
import { userReducer } from './user';

export const reducers = combineReducers({
    
    works: worksReducer,
    work: workReducer,
    doworks: doworksReducer,
    dowork: doworkReducer,
    donotworks: donotworksReducer,
    donotwork: donotworkReducer,
    showcomponentwell: showcomponentwellReducer,
    showtaskmanagment: showtaskmanagmentReducer,
    courses: coursesReducer,
    course: courseReducer,
    user: userReducer,

})