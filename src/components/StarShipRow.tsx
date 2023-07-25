import React from "react";
import StarShip from "../classes/StarShip";
import {StyledList} from "./styled/StyledList";
import {StyledRowDiv} from "./styled/StyledRowDiv";


export const StarShipRow = (props:{key:string,item:StarShip}) => {
    return <StyledList key={props.key}>

        <StyledRowDiv>
           <label style={{marginLeft:"0.5em"}}> {props.item.name}</label>
            <label style={{fontSize:"small",marginLeft:"1em"}}> {props.item.model}</label>
        </StyledRowDiv>
    </StyledList>;
}