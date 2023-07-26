import {StyledMainButton} from "../styled/StyledMainButton";
import {Link} from "react-router-dom";

export function NavBar() {
    return <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        | <Link to={"/"}> <StyledMainButton> HOME</StyledMainButton></Link>
        | <Link to={"/starships/all"}><StyledMainButton> STARSHIPS </StyledMainButton></Link>
        | <Link to={"/characters/all"}><StyledMainButton> CHARACTERS </StyledMainButton></Link>
        | <Link to={"/films/all"}><StyledMainButton> FILMS </StyledMainButton></Link>
        |
    </div>;
}