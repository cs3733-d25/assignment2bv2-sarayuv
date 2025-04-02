import { FullName } from "../../types";
import { PieceInfo } from "../../types";
import List from "./hobby1/list1";
import Table1 from "./hobby1/table1";
import Form1 from "./hobby1/form1";

type hobbiesProp = {
    person: FullName;
    hobby: string;
};

const tablePieces: PieceInfo[] = [
    { composer: "Chopin", piece: "Prelude in C Minor", genre: "Classical" },
    { composer: "Debussy", piece: "Clair de Lune", genre: "Impressionist" },
    { composer: "Vivaldi", piece: "Four Seasons", genre: "Baroque" },
    { composer: "Hans Zimmer", piece: "Time", genre: "Film Score" }
];

function Hobby1({ person, hobby }: hobbiesProp) {
    return (
        <div className="hobby2">
            <h2>{person.firstName}'s hobby is {hobby}</h2>
            <img src="public/orchestra_header.jpg" width="640" alt="orchestra image"/>
            <List person={person} hobbyList={["Violin", "Learning Guitar", "Composing", "Conducting", "Listening to Music"]} />
            <Table1 person={person} pieces={tablePieces} />
            <Form1 />
        </div>
    );
}

export default Hobby1;