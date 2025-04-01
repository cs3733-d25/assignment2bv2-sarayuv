import {FullName} from "../../types";
import {BookInfo} from "../../types";

type bookProp = {
    person: FullName;
    book: BookInfo[];
}

function Table({person, book}: bookProp) {
    return (
        <table className="collapse">
            <caption>Books {person.firstName} has read this year</caption>
            <tr>
                <th>{book[0].title}</th>
                <th>{book[0].author}</th>
                <th>{book[0].date}</th>
            </tr>
            <tr>
                <th>{book[1].title}</th>
                <th>{book[1].author}</th>
                <th>{book[1].date}</th>
            </tr>
            <tr>
                <th>{book[2].title}</th>
                <th>{book[2].author}</th>
                <th>{book[2].date}</th>
            </tr>
            <tr>
                <th>{book[3].title}</th>
                <th>{book[3].author}</th>
                <th>{book[3].date}</th>
            </tr>
            <tr>
                <th>{book[4].title}</th>
                <th>{book[4].author}</th>
                <th>{book[4].date}</th>
            </tr>
        </table>
    )
}

export default Table;