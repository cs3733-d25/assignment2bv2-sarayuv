import React from "react";
import Title from "./components/title";
import Intro from "./components/intro";
import Hobby1 from "./components/hobby1";
import Hobby2 from "./components/hobby2";
import "./styles/App.css";

const App: React.FC = () => {
    return (
        <div className="App">
            <Title hobby1="Music" hobby2="idk" />
            <Intro name1="Sarayu" name2="Nora" />
            <Hobby1 />
            <Hobby2 />
        </div>
    );
};

export default App;