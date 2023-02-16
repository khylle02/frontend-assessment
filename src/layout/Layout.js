import {Outlet} from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout(){
    return(
        <>  
            <Sidebar />
            <div className='content'>
                <Outlet/>
            </div>
        </>
    )
}