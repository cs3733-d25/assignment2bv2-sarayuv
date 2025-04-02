import { FullName } from "../../../types";

type listProps = {
    person: FullName;
    hobbyList: string[];
};

function List({ person, hobbyList }: listProps) {
    return (
        <div className={"list1"}>
            {person.firstName}'s Favorite Hobbies:
            <ul>
                <li style={{color:"darkred"}}>{hobbyList[0]}</li>
                <li>{hobbyList[1]}</li>
                <li>{hobbyList[2]}</li>
                <li>{hobbyList[3]}</li>
                <li>{hobbyList[4]}</li>
                <li>{hobbyList[5]}</li>
                <li>{hobbyList[6]}</li>
            </ul>
        </div>
    );
}

export default List;