import {StyledMainButton} from "../styled/StyledMainButton";
import {Link} from "react-router-dom";

interface SessionBarProps {
    userLogged?: string,
    logOut: () => any
}

export const SessionBar = ({userLogged, logOut}: SessionBarProps) => <>
    <Link to={userLogged ? "/" : "/login"}>
        <StyledMainButton> {userLogged ? userLogged : "LOG IN"} </StyledMainButton>
    </Link>
    /
    {userLogged ?

        <StyledMainButton onClick={logOut}> {"EXIT"}</StyledMainButton>
        :
        <Link to={"/login?new=true"}>
            <StyledMainButton> {"SIGN UP"}</StyledMainButton>
        </Link>
    }
</>;