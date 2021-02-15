import React from "react";
import {render} from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import { getAllcourses } from './actions/courses';


render(
    <Provider store={store}>
<App/>
</Provider> 
, document.getElementById("root"));

store.dispatch(getAllcourses());