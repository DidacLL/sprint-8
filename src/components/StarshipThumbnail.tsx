import {StyledThumbnail} from "./styled/StyledThumbnail";
import StarShip from "../classes/StarShip";

export function StarshipThumbnail(props: { url: string, goTo: (id: number) => void }) {
    const id = StarShip.generateID(props.url);
    const src = StarShip.generateImgURL(id);
    return <StyledThumbnail src={src} alt={"Starship Image"} onClick={() => props.goTo(id)}/>
}