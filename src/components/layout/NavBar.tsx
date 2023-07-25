import {StyledMainButton} from "../styled/StyledMainButton";
import {Link} from "react-router-dom";

export function NavBar() {
    return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        | <Link to={"/"}> <StyledMainButton> HOME</StyledMainButton></Link>
        | <Link to={"/starships"}><StyledMainButton> STARSHIPS </StyledMainButton></Link>
        |
    </div>;
}