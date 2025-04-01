import React from "react";
import {FullName} from "../../types.ts";

type nameProp = {
    person: FullName;
}

function Intro({person}: nameProp) {
    return (
        <div>
            <h3>My name is {person.firstName} {person.lastName}</h3>
            <p>I am a junior at studying computer science.</p>
        </div>
    );
}

export default Intro;