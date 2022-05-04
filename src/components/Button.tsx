
import {FC} from "react";
import {BtnProps} from "../types/types";


export const Button:FC<BtnProps> = ({ text, onclick}) => {
    return(
        <button  onClick={()=>onclick()}>{text}</button>
    )
}
