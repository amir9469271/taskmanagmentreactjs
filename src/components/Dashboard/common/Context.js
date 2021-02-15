import {createContext} from 'react';

 const Context = createContext({
    dropdown :false,
    displaycourse: false,
    displaydashboard:true,
    classblur1:false,
    classblur2:false,
    classblur3:false,
    classblur4:false,
    classblur5:true,
    dispslidenav:false,
    handleModalCreateNewCourse: ()=>{},
    handleModalUpdateCourse: ()=>{},
    handleModalDeleteCourse: ()=>{},
    handleDropdown: ()=>{},
    handledisplayslidenav: ()=>{},
    handleclozemodal: ()=>{},
});
export default Context;