import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NoPage} from "./pages/NoPage";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {StarshipPage} from "./pages/lists/StarshipPage";
import {Login} from "./pages/Login";
import {StarShipView} from "./pages/views/StarShipView";
import {CharacterPage} from "./pages/lists/CharacterPage";
import {CharacterView} from "./pages/views/CharacterView";
import {FilmPage} from "./pages/lists/FilmPage";
import {FilmView} from "./pages/views/FilmView";

function App() {

    const [user, setUser] = useState<string>();

    useEffect(() => {
        const savedUser = localStorage.getItem("saved_user")
        if (savedUser) setUser(savedUser);
    }, []);
    const loginUser = (userName: string) => {
        setUser(userName);
    }

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout logOut={() => setUser(undefined)} userLogged={user}/>}>
                    <Route index element={<Home/>}/>
                    <Route path="login"
                           element={user ? <Home/> : <Login onSubmit={user ? () => setUser(undefined) : loginUser}/>}/>
                    <Route path="starships">
                        <Route path="view" element={user ? <StarShipView/> : <Login onSubmit={loginUser}/>}/>
                        <Route path="*" element={user ? <StarshipPage/> : <Login onSubmit={loginUser}/>}/>
                    </Route>
                    <Route path="characters">
                        <Route path="view" element={user ? <CharacterView/> : <Login onSubmit={loginUser}/>}/>
                        <Route path="*" element={user ? <CharacterPage/> : <Login onSubmit={loginUser}/>}/>
                    </Route>
                    <Route path="films">
                        <Route path="view" element={user ? <FilmView/> : <Login onSubmit={loginUser}/>}/>
                        <Route path="*" element={user ? <FilmPage/> : <Login onSubmit={loginUser}/>}/>
                    </Route>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
