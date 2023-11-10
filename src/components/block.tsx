import React from "react";

interface Blockprops{
    value?: string | null
    onClick?: () => void
}
interface titleprops{
    title:string
}
const TitleLine: React.FC<titleprops>=(props)=>{
    return <h1 id='Title'>{props.title}</h1>
}

const Block: React.FC<Blockprops>=(props)=>{
    return(
        <div onClick={props.onClick} className="block">{props.value}</div>
    )
}
export {Block,TitleLine};