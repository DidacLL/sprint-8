import React from "react";
import StarShip from "../../classes/StarShip";
import {StyledList} from "../styled/StyledList";
import {StyledRowDiv} from "../styled/StyledRowDiv";


interface StarShipRowProps {
    item: StarShip;
    key: string;
    viewStarShip: (item: StarShip) => void
}

export const StarShipRow = (props: StarShipRowProps) => {
    return <StyledList key={props.key}>

        <StyledRowDiv onClick={() => props.viewStarShip(props.item)}>
            <label style={{marginLeft: "0.5em"}}> {props.item.name}</label>
            <label style={{fontSize: "small", marginLeft: "1em"}}> {props.item.model}</label>
        </StyledRowDiv>
    </StyledList>;
}