import Title from "./components/title";
import Intro from "./components/intro";
import Hobby1 from "./components/hobby1";
import Hobby from "./components/hobby2";
import "./styles/App.css";
import {FullName} from "../types.ts";

function App() {
    const nora: FullName = {
        firstName: "Nora",
        lastName: "Cleary",
    }

    const sarayu: FullName = {
        firstName: "Sarayu",
        lastName: "Vijayanagaram",
    }

    return (
        <>
            <Title />
            <Intro person={sarayu} />
            <Intro person={nora} />
            <Hobby1 />
            <Hobby person={nora} hobby={"reading"} />
        </>
    )
}

export default App;