import React, {  useState  } from 'react';
import Nav from './../Common/Nav';
import  Userhelp  from '../Common/Userhelp';
import CreateNewWork from '../Works/CreateNewWork';

const MainLayout = () => {
    const [blur , setBlur] = useState(false);
    return ( 
        <div className={blur ? "blur" : ""}>
             <Nav setBlur={setBlur}/>
            <Userhelp setBlur={setBlur}/>
            <CreateNewWork/>
        </div>
     );
}
export default MainLayout;