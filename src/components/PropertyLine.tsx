interface PropertyLineProps {
    name?: string
    value?: string
}

export function PropertyLine(props: PropertyLineProps) {
    return <div style={{display: "flex", flexWrap: "nowrap", padding: "1em"}}>
        <label style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            fontWeight: "bold",
            marginRight: "1em",
            fontSize: "larger",
            marginBottom: "0.5em"
        }}> {props.name}: </label>
        <label style={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            marginBottom: "0.5em",
            marginRight: "1em"
        }}> {props.value}</label>

    </div>;
}