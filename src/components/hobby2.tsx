import {FullName} from "../../types";
import {BookInfo} from "../../types";
import List from "./Hobby2/list2";
import Table2 from "./Hobby2/tables2"
import Form2 from "./Hobby2/forms2"

//create the attributes of the Hobby tag
type hobbiesProp = {
    person: FullName
    hobby: string
}
// Define an array of books
const tableBooks: BookInfo[] = [
    { title: "I Shall Wear Midnight", author: "Terry Pratchett", date: "1/7/2025" },
    { title: "Twilight: Eclipse", author: "Stephenie Meyer", date: "1/16/2025" },
    { title: "Little Women", author: "Louisa May Alcott", date: "2/1/2025" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", date: "3/04/2025" },
    { title: "Murder on the Orient Express", author: "Agatha Christie", date: "3/14/2025" }
];

//function to pass the prop to other components as an argument
//Hobby takes in a person of type nameProp (a fullName) and a hobby of type string
function Hobby2({person, hobby}: hobbiesProp) {
    return (
        <div className={"hobby2"}>
            <h2>{person.firstName}'s hobby is {hobby}</h2>
            <img src="public/books2b.jpg" width="640" alt="image of books on a shelf"/>
            <List person={person} bookList={["The Da Vinci Code", "Odd Thomas", "The Wee Free Men", "Harry Potter and the Order of the Phoenix", "The Twilight Saga"]} />
            <Table2 person={person} book={tableBooks} />
            <Form2  />
        </div>
    )
}

export default Hobby2;