import React, { useState } from "react";
import "../../styles/App.css";

const Form1: React.FC = () => {
    const [experience, setExperience] = useState<string>("beginner");
    const [comments, setComments] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Experience: ${experience}, Comments: ${comments}`);
    };

    return (
        <div>
            <h2>Music Survey</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <strong>Name:</strong>
                </label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                />
                <br />
                <br />

                <label htmlFor="email">
                    <strong>Email:</strong>
                </label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
                <br />
                <br />

                <p className="bold-label">Favorite Music Genres:</p>

                <input type="checkbox" id="classical" name="genre" value="classical" />
                <label htmlFor="classical">Classical</label>
                <br />

                <input type="checkbox" id="jazz" name="genre" value="jazz" />
                <label htmlFor="jazz">Jazz</label>
                <br />

                <input type="checkbox" id="pop" name="genre" value="pop" />
                <label htmlFor="pop">Pop</label>
                <br />
                <br />

                <p className="bold-label">Preferred Instrument:</p>

                <input type="radio" id="guitar" name="instrument" value="guitar" />
                <label htmlFor="guitar">Guitar</label>
                <br />

                <input type="radio" id="violin" name="instrument" value="violin" />
                <label htmlFor="violin">Violin</label>
                <br />

                <input type="radio" id="drum" name="instrument" value="drum" />
                <label htmlFor="drum">Drum</label>
                <br />

                <input type="radio" id="piano" name="instrument" value="piano" />
                <label htmlFor="piano">Piano</label>
                <br />
                <br />

                <label htmlFor="experience">
                    <strong>Musical Experience Level:</strong>
                </label>
                <br />
                <select
                    id="experience"
                    name="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <br />
                <br />

                <label htmlFor="comments">
                    <strong>Comments:</strong>
                </label>
                <br />
                <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    cols={40}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Enter your comments here..."
                />
                <br />
                <br />

                <button type="submit">Submit Survey</button>
            </form>
        </div>
    );
};

export default Form1;