import {SessionBar} from "./SessionBar";

interface TitleBarProps {
    userLogged?: string
}

export const TitleBar = ({userLogged}: TitleBarProps) => <div style={{
    height: "6em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
}}>
    <div style={{
        display: "flex", justifyContent: "center"
    }}>
        <img
            style={{
                height: "3em",
                width: "auto",
            }}
            src={"https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"}/>
    </div>
    <div style={{
        position: "absolute",
        justifySelf: "right",
        right: 0,
        top: 0,
        padding: "2em"
    }}>
        <SessionBar userLogged={userLogged}/>
    </div>
</div>;