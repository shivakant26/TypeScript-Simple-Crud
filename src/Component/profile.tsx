
import React, { Children } from "react";

interface ProfileProps{
    title?:string,
    lang?:string
    status: "single" | "multiple" | "comited" //this is union type
    children?:React.ReactNode
}

export const Profile = (props:ProfileProps) =>{
    const {title , lang , status , children} = props;  
    return(
        <>
        <h2>{title} : {lang} : {status}</h2>
        <p>{children}</p>
        </>
    )
}