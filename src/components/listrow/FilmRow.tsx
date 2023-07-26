import React from "react";
import Film from "../../classes/Film";
import {StyledList} from "../styled/StyledList";
import {StyledRowDiv} from "../styled/StyledRowDiv";


interface FilmRowProps {
    item: Film;
    key: string;
    viewFilm: (item: Film) => void
}

export const FilmRow = (props: FilmRowProps) => {
    return <StyledList key={props.key}>

        <StyledRowDiv onClick={() => props.viewFilm(props.item)}>
            <label style={{marginLeft: "0.5em"}}> {props.item.title}</label>
            <label style={{fontSize: "small", marginLeft: "1em"}}> {props.item.director}</label>
        </StyledRowDiv>
    </StyledList>;
}