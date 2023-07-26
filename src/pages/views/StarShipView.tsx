import {useNavigate, useSearchParams} from "react-router-dom";
import StarShip from "../../classes/StarShip";
import {useEffect, useState} from "react";
import {StyledPropertiesDiv} from "../../components/styled/StyledPropertiesDiv";
import {PropertyLine} from "../../components/PropertyLine";
import {CharacterThumbnail} from "../../components/CharacterThumbnail";
import {FilmThumbnail} from "../../components/FilmThumbnail";


export const StarShipView = () => {
    const [searchParams] = useSearchParams();

    const [ship, setShip] = useState<StarShip>();
    const [character, setCharacter] = useState<number>();
    const [film, setFilm] = useState<number>();

    const navigate = useNavigate();

    useEffect(() => {
        if (character) navigate(`/characters/view?id=${character}`)
        setCharacter(undefined);
    }, [character]);
    useEffect(() => {
        if (film) navigate(`/films/view?id=${film}`);
        setFilm(undefined);
    }, [film]);
    const goToCharacter = (id: number) => {
        setCharacter(id)
    };
    const goToFilm = (id: number) => {
        setFilm(id)
    };
    useEffect(() => {

    }, [ship]);

    useEffect(() => {
        fetchData();
        return setShip(undefined)
    }, []);
    const fetchData = async () => {
        // setIsLoading(true);
        // setError(null);

        const id = searchParams.get('id');
        try {
            const response = await fetch(`https://swapi.dev/api/starships/${id}`);
            const data = await response.json();
            setShip(new StarShip(data))

        } catch (error) {
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
                <img src={ship?.imgURL ? ship.imgURL : "https://clipart-library.com/images/pTqraKR8c.jpg"}
                     alt={ship?.name} style={{width: "min(60vw,720px)", height: "auto", borderRadius: "1em"}}/>
                <h2>{ship?.name}</h2>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", alignContent: "flex-start", alignItems: "flex-start"}}>

                <StyledPropertiesDiv>
                    <PropertyLine name="Model" value={ship?.model}/>
                    <PropertyLine name={"Manufacturer"} value={ship?.manufacturer}/>
                    <PropertyLine name={"Starship class"} value={ship?.starship_class}/>

                </StyledPropertiesDiv>

                <StyledPropertiesDiv>
                    <PropertyLine name={"MGLT"} value={ship?.MGLT ? ship.MGLT.toString() : ''}/>
                    <PropertyLine name={"HyperDrive Rating"}
                                  value={ship?.hyperdrive_rating ? ship.hyperdrive_rating.toString() : ''}/>
                    <PropertyLine name={"Max Atmosphering Speed"}
                                  value={ship?.max_atmosphering_speed ? ship.max_atmosphering_speed.toString() : ''}/>
                    <PropertyLine name={"Cost (in credits)"}
                                  value={ship?.cost_in_credits ? ship.cost_in_credits.toString() : ''}/>
                </StyledPropertiesDiv>


                <StyledPropertiesDiv>
                    <PropertyLine name={"Length"} value={ship?.length ? ship.length.toString() : ''}/>
                    <PropertyLine name={"Cargo Capacity"}
                                  value={ship?.cargo_capacity ? ship.cargo_capacity.toString() : ''}/>
                    <PropertyLine name={"Crew"} value={ship?.crew ? ship.crew.toString() : ''}/>
                    <PropertyLine name={"Passengers"} value={ship?.passengers ? ship.passengers.toString() : ''}/>
                    <PropertyLine name={"Consumables"} value={ship?.consumables ? ship.consumables.toString() : ''}/>

                </StyledPropertiesDiv>

                <StyledPropertiesDiv>
                    <div>

                        <PropertyLine name={"Pilots: "}></PropertyLine>
                        {ship?.pilots?.map((pilot) => {
                                return <CharacterThumbnail url={pilot} goTo={goToCharacter}/>
                            }
                        )}
                    </div>
                </StyledPropertiesDiv>

                <StyledPropertiesDiv>
                    <div>

                        <PropertyLine name={"Appears in: "}></PropertyLine>
                        {ship?.films?.map((film) => {
                                return <FilmThumbnail url={film} goTo={goToFilm}/>
                            }
                        )}
                    </div>
                </StyledPropertiesDiv>

            </div>
        </div>
    );
}
