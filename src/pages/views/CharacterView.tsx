import {useNavigate, useSearchParams} from "react-router-dom";
import Character from "../../classes/Character";
import {useEffect, useState} from "react";
import {StyledPropertiesDiv} from "../../components/styled/StyledPropertiesDiv";
import {PropertyLine} from "../../components/PropertyLine";
import {StarshipThumbnail} from "../../components/StarshipThumbnail";
import {FilmThumbnail} from "../../components/FilmThumbnail";

export const CharacterView = () => {
    const [searchParams] = useSearchParams();

    const [character, setCharacter] = useState<Character>();
    const [starship, setStarship] = useState<number>();
    const [film, setFilm] = useState<number>();

    const navigate = useNavigate();

    useEffect(() => {
        if (starship) navigate(`/starships/view?id=${starship}`)
        setCharacter(undefined);
    }, [starship]);
    useEffect(() => {
        if (film) navigate(`/films/view?id=${film}`);
        setFilm(undefined);
    }, [film]);
    const goToStarShip = (id: number) => {
        setStarship(id)
    };
    const goToFilm = (id: number) => {
        setFilm(id)
    };
    useEffect(() => {

    }, [character]);

    useEffect(() => {
        fetchData();
        return setCharacter(undefined)
    }, []);
    const fetchData = async () => {
        // setIsLoading(true);
        // setError(null);

        const id = searchParams.get('id');
        try {
            const response = await fetch(`https://swapi.dev/api/people/${id}/`);
            const data = await response.json();
            setCharacter(new Character(data))

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
            <div style={{display: "flex", flexWrap: "wrap", alignContent: "flex-start", alignItems: "flex-start"}}>
                <div style={{textAlign: "center"}}>
                    <img src={character?.imgURL ? character.imgURL : "https://clipart-library.com/images/pTqraKR8c.jpg"}
                         alt={character?.name} style={{width: "auto", height: "60vh", borderRadius: "1em"}}/>
                    <h2>{character?.name}</h2>
                </div>

                <StyledPropertiesDiv>
                    <PropertyLine name="Gender" value={character?.gender}/>
                    <PropertyLine name="Born" value={character?.birth_year}/>

                </StyledPropertiesDiv>

                <StyledPropertiesDiv>

                    <PropertyLine name={"Height"} value={character?.height}/>
                    <PropertyLine name={"Weight"} value={character?.mass}/>
                    <PropertyLine name={"Eyes Color"} value={character?.eye_color}/>
                    <PropertyLine name={"Hair Color"} value={character?.hair_color}/>
                    <PropertyLine name={"Skin Color"} value={character?.skin_color}/>
                </StyledPropertiesDiv>

                {(character && character.starships && character.starships.length > 0) ?
                    <StyledPropertiesDiv>
                        <div>
                            <PropertyLine name={"StarShips"}></PropertyLine>
                            {character?.starships?.map((starship) => {
                                    return <StarshipThumbnail url={starship} goTo={goToStarShip}/>
                                }
                            )}
                        </div>
                    </StyledPropertiesDiv>
                    : ''
                }
                {(character && character.films && character.films.length > 0) ?

                    <StyledPropertiesDiv>
                        <div>

                            <PropertyLine name={"Appears in"}></PropertyLine>
                            {character?.films?.map((film) => {
                                    return <FilmThumbnail url={film} goTo={goToFilm}/>
                                }
                            )}
                        </div>
                    </StyledPropertiesDiv> : ''}

            </div>
        </div>
    );
}
