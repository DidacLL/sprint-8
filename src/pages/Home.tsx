import {StyledMainDiv} from "../components/styled/StyledMainDiv";
import {Link} from "react-router-dom";
import {StyledMainButton} from "../components/styled/StyledMainButton";

export const Home = () => {

    return <StyledMainDiv>
        Look for your favourite Star Wars data!
        <Link to={"/starships/all"}> <StyledMainButton> View Starships!</StyledMainButton></Link>
    </StyledMainDiv>
};