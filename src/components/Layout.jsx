import { Outlet,NavLink } from "react-router-dom";
function Layout(){
    return(
        <div>
            <div style={{backgroundColor:"pink"}}>
            <NavLink to={"/"}>Home</NavLink> &emsp;
            <NavLink to={"/profile"}>Profile</NavLink> &emsp;
            <NavLink to={"/github"}>Github</NavLink>
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout;