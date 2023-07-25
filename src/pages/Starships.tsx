import React, {useEffect, useState} from "react";
import StarShip from "../classes/StarShip";
import InfiniteScroll from "react-infinite-scroll-component";

export const Starships = () => {
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
            const rawList=data.results;
            const starShipList :StarShip[]=[];
            for (let i = 0; i < rawList.length; i++) {
                starShipList.push(
                    new StarShip(rawList[i],
                    `https://starwars-visualguide.com/assets/img/starships/${rawList[i].id}.jpg`)
                )
            console.log("count:"+i)
            }
            setItems(prevItems => [...prevItems, ...starShipList]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData().then(()=>setIsLoading(false));
    }, []);

    return <>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >
                <ul>
                    {items.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))}
                </ul>
            </InfiniteScroll>
            {error && <p>Error: {"ERR"}</p>}
        </>
}