import React from "react";
import {StyledList} from "../styled/StyledList";
import {StyledRowDiv} from "../styled/StyledRowDiv";
import Character from "../../classes/Character";

//fixme
interface CharacterRowProps {
    item: Character;
    key: string;
    viewCharacter: (item: Character) => void
}

const CharacterRow = (props: CharacterRowProps) => {
    return <StyledList key={props.key}>

        <StyledRowDiv onClick={() => props.viewCharacter(props.item)}>
            <label style={{marginLeft: "0.5em"}}> {props.item.name}</label>
            <label style={{fontSize: "small", marginLeft: "1em"}}>from: {props.item.gender}</label>
        </StyledRowDiv>
    </StyledList>;
}
export default CharacterRow;