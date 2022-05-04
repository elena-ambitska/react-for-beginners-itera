import React, {FC} from "react";
import {ContentProps} from "../types/types";
import "../App.css";

export const Content:FC<ContentProps> = ({name,bio,contact,showContent}) => {
    return (
        <div className={showContent ? "show":"hide"}>
            <div className="App">
                <h1>Hi! My name is {name}</h1>
                <p>I am from {bio.city}. I am {bio.year}. My stack:</p>
                <ul>
                    {bio.stack.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <a href={contact}>My Linkedin</a>
            </div>
        </div>
    )

}