function Form1() {
    return (
        <div>
            <h2>Music Survey</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br /><br />

                <p>Favorite Music Genres:</p>
                <input type="checkbox" id="classical" name="genre" value="classical" />
                <label htmlFor="classical">Classical</label><br />
                <input type="checkbox" id="jazz" name="genre" value="jazz" />
                <label htmlFor="jazz">Jazz</label><br />
                <input type="checkbox" id="pop" name="genre" value="pop" />
                <label htmlFor="pop">Pop</label><br /><br />

                <p>Preferred Instrument:</p>
                <input type="radio" id="guitar" name="instrument" value="guitar" />
                <label htmlFor="guitar">Guitar</label><br />
                <input type="radio" id="violin" name="instrument" value="violin" />
                <label htmlFor="violin">Violin</label><br />
                <input type="radio" id="drum" name="instrument" value="drum" />
                <label htmlFor="drum">Drum</label><br />
                <input type="radio" id="piano" name="instrument" value="piano" />
                <label htmlFor="piano">Piano</label><br /><br />

                <p>Musical Experience Level:</p>
                <select name="experience" id="experience">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                <br /><br />

                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>
                <br /><br />

                <button type="submit">Submit Survey</button>
            </form>
        </div>
    );
}

export default Form1;