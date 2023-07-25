import {StyledMainButton} from "../components/styled/StyledMainButton";
import {useState} from "react";

interface LoginProps {
    onSubmit: (userName: string, password: string) => void
}

export const Login = ({onSubmit}: LoginProps) => {

    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    function login() {
        onSubmit(userName,password)
        setPassword("")
        setUserName("")
    }

    return <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height:"100%",
        width:"100%",
        // overflow:"hidden",
        flexGrow:1
    }}>
        <div style={{padding:"1em", textAlign:"center", border:"0.1em solid white", borderRadius:"1em"}}>
            <div style={{textAlign:"right"}}>
                <label> UserName: </label>
                <input style={{margin: "1em"}}
                       type={"text"}
                       onChange={(e)=>setUserName(e.target.value)}
                       value={userName}
                />
            </div>

            <div style={{textAlign:"right"}}>
                <label> Password: </label>
                <input style={{margin: "1em"}}
                       onChange={(e)=>setPassword(e.target.value)}
                       type={"password"}
                       value={password}
                />
            </div>
            <StyledMainButton
                disabled={userName.length===0||password.length===0}
                onClick={login}
            > LOG IN </StyledMainButton>
        </div>
    </div>
};