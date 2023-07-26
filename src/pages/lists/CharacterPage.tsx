import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {StyledMainDiv} from "../../components/styled/StyledMainDiv";
import {useNavigate} from "react-router-dom";
import CharacterRow from "../../components/listrow/CharacterRow";
import Character from "../../classes/Character";

export const CharacterPage = () => {
    const [items, setItems] = useState<Map<number, Character>>(new Map<number, Character>());
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [page, setPage] = useState(1);
    const [currentView, setCurrentView] = useState<Character>();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentView) navigate(`./view?id=${currentView.id}`)
    }, [currentView]);
    const fetchCharacters = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
            const data = await response.json();
            const rawList: any[] = data.results;
            rawList.forEach((value) => {
                    const character = new Character(value);
                    setItems(prevState => prevState.set(character.id, character));
                }
            )
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.log(error)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!error) fetchCharacters().then(() => setIsLoading(false));
    }, []);

    const viewCharacter = (item: Character) => {
        setCurrentView(item)
    };
    return <>
        <StyledMainDiv>
            <InfiniteScroll
                dataLength={items.size}
                next={fetchCharacters}
                hasMore={error === null} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>That's all folks!</p>}
            >
                <ul>
                    {Array.from(items.values()).map(item => (
                        <CharacterRow viewCharacter={viewCharacter} key={item.name} item={item}/>
                    ))}
                </ul>
            </InfiniteScroll>
        </StyledMainDiv>
    </>
}