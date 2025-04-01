import React from "react";
import "../../styles/list.css";

const List1: React.FC = () => {
    return (
        <div>
            <p>My favorite hobbies are anything to do with music:</p>
            <ul className="list1">
                <li>Playing in orchestra</li>
                <li>Playing in small groups</li>
                <li>Playing the violin</li>
                <li>Arranging a piece</li>
                <li>Composing a piece</li>
                <li>Listening to songs</li>
                <li>Learning to play the ukulele</li>
            </ul>
        </div>
    );
};

export default List1;