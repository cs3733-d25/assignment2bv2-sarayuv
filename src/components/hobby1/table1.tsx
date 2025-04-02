import {FullName} from "../../../types";
import {PieceInfo} from "../../../types";

type pieceProp = {
    person: FullName;
    pieces: PieceInfo[];
};

function Table1({person, pieces }: pieceProp) {
    return (
        <table className="collapse">
            <caption id={"caption"}>{person.firstName}'s Favorite Pieces</caption>
            <tr>
                <th>Composer</th>
                <th>Favorite Piece</th>
                <th>Genre</th>
            </tr>
            <tr>
                <th>{pieces[0].composer}</th>
                <th>{pieces[0].piece}</th>
                <th>{pieces[0].genre}</th>
            </tr>
            <tr>
                <th>{pieces[1].composer}</th>
                <th>{pieces[1].piece}</th>
                <th>{pieces[1].genre}</th>
            </tr>
            <tr>
                <th>{pieces[2].composer}</th>
                <th>{pieces[2].piece}</th>
                <th>{pieces[2].genre}</th>
            </tr>
            <tr>
                <th>{pieces[3].composer}</th>
                <th>{pieces[3].piece}</th>
                <th>{pieces[3].genre}</th>
            </tr>
        </table>
    );
}

export default Table1;