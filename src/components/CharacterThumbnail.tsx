import Character from "../classes/Character";
import {StyledThumbnail} from "./styled/StyledThumbnail";

export function CharacterThumbnail(props: { url: string, goTo: (id: number) => void }) {
    const id = Character.generateID(props.url);
    const src = Character.generateImgURL(id);
    return <StyledThumbnail src={src} alt={"Pilot Image"} onClick={() => props.goTo(id)}/>
}