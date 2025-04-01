import React from "react";
import "../../styles/App.css";

const Table1: React.FC = () => {
    return (
        <div>
            <h2>My Favorite Pieces</h2>
            <table className="table1">
                <thead>
                <tr>
                    <th>Composer</th>
                    <th>Favorite Piece</th>
                    <th>Genre</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Chopin</td>
                    <td>Prelude in C Minor</td>
                    <td>Classical</td>
                </tr>

                <tr>
                    <td>Debussy</td>
                    <td>Clair de Lune</td>
                    <td>Impressionist</td>
                </tr>
                <tr>
                    <td>Vivaldi</td>
                    <td>Four Seasons</td>
                    <td>Baroque</td>
                </tr>
                <tr>
                    <td>Hans Zimmer</td>
                    <td>Time</td>
                    <td>Film Score</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;