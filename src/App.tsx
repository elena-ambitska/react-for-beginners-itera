import React from 'react';

import './App.css';

import myJSON from "./my.json";

function App() {
  return (
    <div className="App">
        <h1>Hi! My name is {myJSON.name}</h1>
        <p>I am from {myJSON.bio.city}. I am {myJSON.bio.year}. My stack:</p>
<ul>
    {myJSON.bio.stack.map((item, index) => {
        return <li key={index}>{item}</li>
    })}
</ul>
        <a href={myJSON.contact}>My Linkedin</a>
    </div>
  );
}

export default App;
