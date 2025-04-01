import React from "react";
import List1 from "./hobby1/list1";
import Table1 from "./hobby1/table1";
import Form1 from "./hobby1/form1";
import "../styles/App.css";

const Hobby1: React.FC = () => {
    return (
        <div className="hobby-section">
            <h2>Hobby 1: Violin</h2>
            <img
                src="public/orchestra_header.jpg"
                alt="Orchestra image"
                className="hobby1-image"
            />
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
};

export default Hobby1;