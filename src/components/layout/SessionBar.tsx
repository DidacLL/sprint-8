import {StyledMainButton} from "../styled/StyledMainButton";
import {Link} from "react-router-dom";

interface SessionBarProps {
    userLogged?: string
}

export const SessionBar = ({userLogged}: SessionBarProps) => <>
    <Link to={userLogged ? "/home" : "/login"}>
        <StyledMainButton> {userLogged ? userLogged : "LOG IN"} </StyledMainButton>
    </Link>
    /
    <Link to={userLogged ? "/home" : "/login"}>
        <StyledMainButton> {userLogged ? "EXIT" : "SIGN UP"}</StyledMainButton>
    </Link>
</>;