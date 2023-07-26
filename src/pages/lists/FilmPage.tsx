import React, {useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {StyledMainDiv} from "../../components/styled/StyledMainDiv";
import {useNavigate} from "react-router-dom";
import Film from "../../classes/Film";
import {FilmRow} from "../../components/listrow/FilmRow";

export const FilmPage = () => {
    const [items, setItems] = useState<Map<number, Film>>(new Map<number, Film>());
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const [page, setPage] = useState(1);
    const [currentView, setCurrentView] = useState<Film>();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentView) navigate(`./view?id=${currentView.id}`)
    }, [currentView]);
    const fetchFilms = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://swapi.dev/api/films/?page=${page}`);
            const data = await response.json();
            const rawList: any[] = data.results;
            const charactersList: Film[] = [];
            // const episodeList= new Map<number,Film>();
            rawList.forEach((value) => {
                    const film = new Film(value);
                    charactersList.push(film)
                    setItems(prevState => prevState.set(value.episode_id, film));
                }
            )

            setPage(page + 1);
        } catch (error) {
            console.log(error)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!error) fetchFilms().then(() => setIsLoading(false));
    }, []);


    useEffect(() => {

    }, [items]);
    const viewFilm = (item: Film) => {
        setCurrentView(item)
    };
    return <>
        <StyledMainDiv>
            <InfiniteScroll
                dataLength={items.size}
                next={fetchFilms}
                hasMore={error === null} // Replace with a condition based on your data source
                loader={<p>Loading...</p>}
                endMessage={<p>That's all folks!</p>}
            >
                <ul>
                    {Array.from(items.values()).map(item => (
                        <FilmRow viewFilm={viewFilm} key={item.title} item={item}/>
                    ))}
                </ul>
            </InfiniteScroll>
        </StyledMainDiv>
    </>
}