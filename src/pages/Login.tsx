import {StyledMainButton} from "../components/styled/StyledMainButton";
import {useState} from "react";

interface LoginProps {
    onSubmit: (userName: string) => void
}

export const Login = ({onSubmit}: LoginProps) => {

    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");


    const [saveUser, setSaveUser] = useState<boolean>();

    function login() {

        if (saveUser) {
            localStorage.setItem("saved_user", userName);
        }

        const savedUser = localStorage.getItem(userName)
        if (savedUser && savedUser.match(password)) {
            onSubmit(userName);
        } else {
            localStorage.setItem(userName, password);
            onSubmit(userName);
        }
        setPassword("")
        setUserName("")
        setSaveUser(false)
    }

    return <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        // overflow:"hidden",
        flexGrow: 1
    }}>
        <div style={{padding: "1em", textAlign: "center", border: "0.1em solid white", borderRadius: "1em"}}>
            <div style={{textAlign: "right"}}>
                <label> UserName: </label>
                <input style={{margin: "1em"}}
                       type={"text"}
                       onChange={(e) => setUserName(e.target.value)}
                       value={userName}
                />
            </div>

            <div style={{textAlign: "right"}}>
                <label> Password: </label>
                <input style={{margin: "1em"}}
                       onChange={(e) => setPassword(e.target.value)}
                       type={"password"}
                       value={password}
                />
            </div>


            <div style={{textAlign: "right"}}>
                <label> Save user: </label>
                <input style={{margin: "1em"}}
                       onChange={(e) => setSaveUser(e.target.checked)}
                       type={"checkbox"}
                       checked={saveUser}

                />
            </div>
            <StyledMainButton
                disabled={userName.length === 0 || password.length === 0}
                onClick={login}
            > LOG IN </StyledMainButton>
        </div>
    </div>
};