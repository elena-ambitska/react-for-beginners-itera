import React, {useState} from 'react';
import {Button} from "./Button";
import {Content} from "./Content";
import myJSON from "../my.json";
import "../App.css";


const App = () => {
    const [showContent, setShowContent] = useState(false);

    const handleClick = () => {
        setShowContent(!showContent);
    }

    return (
        <>
            <Button text="Click" onclick={handleClick}/>
            <Content showContent={showContent} name={myJSON.name} bio={myJSON.bio} contact={myJSON.contact}/>
        </>
    )
}

export default App;
