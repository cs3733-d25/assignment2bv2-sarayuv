import {FullName} from "../../../types";

type listProps = {
    person: FullName
    bookList: string[]
}

function List({person, bookList}: listProps){
    return (
        <div className={"list1"}>
            {person.firstName}'s Favorite Books:
            <ol>
                <li>{bookList[0]}</li>
                <li>{bookList[1]}</li>
                <li>{bookList[2]}</li>
                <li>{bookList[3]}</li>
                <li>{bookList[4]}</li>
            </ol>
        </div>

    )
}

export default List;