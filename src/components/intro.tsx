import {FullName} from "../../types.ts";

type nameProp = {
    person: FullName;
    person2: FullName;
}

function Intro({person, person2}: nameProp) {
    return (
        <div>
            <h3>{person.firstName} {person.lastName} and {person2.firstName} {person2.lastName}</h3>
            <p>{person.firstName} and {person2.firstName} are both juniors studying computer science at Worcester Polytechnic Institute.</p>
        </div>
    );
}

export default Intro;