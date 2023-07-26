import React, {useEffect, useState} from "react";
import StarShip from "../../classes/StarShip";
import InfiniteScroll from "react-infinite-scroll-component";
import {StarShipRow} from "../../components/listrow/StarShipRow";
import {StyledMainDiv} from "../../components/styled/StyledMainDiv";
import {useNavigate} from "react-router-dom";

export const StarshipPage = () => {
    const [items, setItems] = useState<Map<number, StarShip>>(new Map<number, StarShip>());
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [page, setPage] = useState(1);
    const [currentView, setCurrentView] = useState<StarShip>();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentView) navigate(`./view?id=${currentView.id}`)
    }, [currentView]);
    const fetchStarShips = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://swapi.dev/api/starships/?page=${page}`);
            const data = await response.json();
            const rawList: any[] = data.results;
            rawList.forEach((value) => {
                    const ship = new StarShip(value);
                    setItems(prevState => prevState.set(ship.id, ship));
                }
            )

            setPage(page + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!error) fetchStarShips().then(() => setIsLoading(false));
    }, []);

    const viewStarShip = (item: StarShip) => {
        setCurrentView(item)
    };
    return <>
        <StyledMainDiv>
            <InfiniteScroll
                dataLength={items.size}
                next={fetchStarShips}
                hasMore={error === null} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>That's all folks!</p>}
            >
                <ul>
                    {Array.from(items.values()).map(item => (
                        <StarShipRow viewStarShip={viewStarShip} key={item.name} item={item}/>
                    ))}
                </ul>
            </InfiniteScroll>
        </StyledMainDiv>
    </>
}