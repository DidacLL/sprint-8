import React, {useEffect, useState} from "react";
import StarShip from "../classes/StarShip";
import InfiniteScroll from "react-infinite-scroll-component";
import {StarShipRow} from "../components/StarShipRow";
import {StyledMainDiv} from "../components/styled/StyledMainDiv";

export const Starships = () => {
    const starShipMap: Map<number, StarShip> = new Map<number, StarShip>();
    const [items, setItems] = useState<StarShip[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
            const data = await response.json();
            const rawList: any[] = data.results;
            const starShipList: StarShip[] = [];
            const nameList: string[] = [];
            rawList.forEach((value) => {
                    if (nameList.length===0||nameList.indexOf(value.name)<0) {
                        const ship = new StarShip(value,
                            `https://starwars-visualguide.com/assets/img/starships/${value.id}.jpg`);
                        starShipList.push(ship)
                        nameList.push(ship.name)
                    }
                }
            )

            setItems(prevItems => [...prevItems, ...starShipList]);
            setPage(page + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData().then(() => setIsLoading(false));
    }, []);

    return <>
        <StyledMainDiv>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={error === null} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>That's all folks!</p>}
            >
                <ul>
                    {items.map(item => (
                        <StarShipRow key={item.name} item={item}/>
                    ))}
                </ul>
            </InfiniteScroll>
        </StyledMainDiv>
    </>
}