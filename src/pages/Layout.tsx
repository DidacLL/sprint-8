import {NavBar} from "../components/layout/NavBar";
import {StyledHR} from "../components/styled/StyledHR";
import {TitleBar} from "../components/layout/TitleBar";
import {Outlet} from "react-router-dom";

interface LayoutProps {
    userLogged?: string
}

export const Layout = ({userLogged}: LayoutProps) => {

    return <div style={{
        display: "flex", flexDirection: "column",
        backgroundColor: "black", color: "lightgrey", minHeight: "100vh"
    }}>
        <div style={{
            display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "1%"
        }}>
            <TitleBar userLogged={userLogged}/>
            <StyledHR/>
            <NavBar/>
            <StyledHR/>
        </div>
        <Outlet/>
    </div>
};