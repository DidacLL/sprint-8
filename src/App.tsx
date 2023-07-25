import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NoPage} from "./pages/NoPage";
import {Layout} from "./pages/Layout";
import {Home} from "./pages/Home";
import {Starships} from "./pages/Starships";
import {Login} from "./pages/Login";

function App() {

    const [user, setUser] = useState<string>();

    const loginUser=(userName: string,password:string)=>{
        setUser(userName);
    }

    return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout userLogged={user}/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login  onSubmit={user?()=>setUser(undefined):loginUser}/>}/>
            <Route path="starships" element={user?<Starships/>:<Login onSubmit={loginUser}/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
