import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


const Layout=()=>{
    return(
        <>
<Header>    
        <Outlet></Outlet>
</Header>  
<Footer/>
        </>
    )
}
export default Layout;