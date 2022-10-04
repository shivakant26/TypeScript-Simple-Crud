interface data{
    name:string
}

export function Welcome(props:data){
    return(
        <>
        <h1>Welcome Component</h1>
        <p>{props.name}</p>
        </>
    )
}