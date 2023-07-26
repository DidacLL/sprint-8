import {useNavigate, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Film from "../../classes/Film";
import {StyledPropertiesDiv} from "../../components/styled/StyledPropertiesDiv";
import {PropertyLine} from "../../components/PropertyLine";
import {CharacterThumbnail} from "../../components/CharacterThumbnail";
import {StarshipThumbnail} from "../../components/StarshipThumbnail";

export const FilmView = () => {
    const [searchParams] = useSearchParams();

    const [film, setFilm] = useState<Film>();
    const [character, setCharacter] = useState<number>();
    const [starship, setStarship] = useState<number>();

    const navigate = useNavigate();

    useEffect(() => {
        if (character) navigate(`/characters/view?id=${character}`)
        setCharacter(undefined);
    }, [character]);
    useEffect(() => {
        if (starship) navigate(`/starships/view?id=${starship}`);
        setFilm(undefined);
    }, [starship]);
    const goToCharacter = (id: number) => {
        setCharacter(id)
    };
    const goToStarship = (id: number) => {
        setStarship(id)
    };
    useEffect(() => {

    }, [film]);

    useEffect(() => {
        fetchData();
        return setFilm(undefined)
    }, []);
    const fetchData = async () => {
        // setIsLoading(true);
        // setError(null);

        const id = searchParams.get('id');
        try {
            const response = await fetch(`https://swapi.dev/api/films/${id}/`);
            const data = await response.json();
            setFilm(new Film(data))

        } catch (error) {
            console.log("ERRR")
        }
    };
    return (

        <div style={{
            backgroundColor: "#313131",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            margin: "0 max(10%,2em) 2em max(10%,2em)",
            padding: "2em"
        }}>
            <div style={{width: "100%", textAlign: "center"}}>
                <img src={film?.imgURL ? film.imgURL : "https://clipart-library.com/images/pTqraKR8c.jpg"}
                     alt={film?.title} style={{width: "min(60vw,720px)", height: "auto", borderRadius: "1em"}}/>
                <h2>{film?.title}</h2>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", alignContent: "flex-start", alignItems: "flex-start"}}>

                <StyledPropertiesDiv>
                    <PropertyLine name="Episode: " value={film?.episode_id}/>
                    <PropertyLine name={"Opening:"} value={film?.opening_crawl}/>

                </StyledPropertiesDiv>

                <StyledPropertiesDiv>
                    <PropertyLine name={"Directed by"} value={film?.director ? film.director.toString() : ''}/>
                    <PropertyLine name={"Produced by"}
                                  value={film?.producer ? film.producer.toString() : ''}/>
                    <PropertyLine name={"Realease"}
                                  value={film?.release_date ? film.release_date.toString() : ''}/>
                </StyledPropertiesDiv>


                {(film && film.characters && film.characters.length > 0) ?
                    <StyledPropertiesDiv>
                        <div>
                            <PropertyLine name={"Characters"}></PropertyLine>
                            {film?.characters?.map((character) => {
                                    return <CharacterThumbnail url={character} goTo={goToCharacter}/>
                                }
                            )}
                        </div>
                    </StyledPropertiesDiv> : ''
                }

                {(film && film.starships && film.starships.length > 0) ?
                    <StyledPropertiesDiv>
                        <div>

                            <PropertyLine name={"Starships"}></PropertyLine>
                            {film?.starships?.map((starship) => {
                                    return <StarshipThumbnail url={starship} goTo={goToStarship}/>
                                }
                            )}
                        </div>
                    </StyledPropertiesDiv>
                    : ''}

            </div>
        </div>
    );
}
