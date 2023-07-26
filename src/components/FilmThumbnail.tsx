import {StyledThumbnail} from "./styled/StyledThumbnail";
import Film from "../classes/Film";


export function FilmThumbnail(props: { url: string, goTo: (id: number) => void }) {
    const id = Film.generateID(props.url);
    const src = Film.generateImgURL(id);
    return <StyledThumbnail src={src} alt={"Film Image"} onClick={() => props.goTo(id)}/>
}