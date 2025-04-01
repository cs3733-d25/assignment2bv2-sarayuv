function Form(){
    return(
        <div>
            <h2>Recommend a Book!</h2>
            <form>
                <label htmlFor="bookname">Book Title:</label>
                <input type="text" id="bookname" name="name"/>
                <br/>
                <br/>
                <label htmlFor="authorname">Author's Full Name: </label>
                <input type="text" id="authorname" name="name"/>
                <br/>

                <p>Why are you recommending this book?</p>
                <input type="checkbox" className="select" id="fav"/>
                <label htmlFor="fav" className="label-for-check">This book is my personal favorite</label>
                <br/>
                <input type="checkbox" className="select" id="type"/>
                <label htmlFor="type" className="label-for-check">This book is similar to a book Nora has read</label>
                <br/>
                <input type="checkbox" className="select" id="author"/>
                <label htmlFor="author" className="label-for-check">This book is written by an author that Nora has
                    read</label>
                <br/>
                <input type="checkbox" className="select" id="easy"/>
                <label htmlFor="easy" className="label-for-check">Easy read</label>

                <p>Please rate the book you are recommending</p>
                <input type="radio" id="one" name="rate" className="select" value="☆"/>
                <label htmlFor="one" className="label-for-check">☆</label><br/>
                <input type="radio" id="two" name="rate" className="select" value="☆☆"/>
                <label htmlFor="two" className="label-for-check">☆☆</label><br/>
                <input type="radio" id="three" name="rate" className="select" value="☆☆☆"/>
                <label htmlFor="three" className="label-for-check">☆☆☆</label><br/>
                <input type="radio" id="four" name="rate" className="select" value="☆☆☆☆"/>
                <label htmlFor="four" className="label-for-check">☆☆☆☆</label><br/>
                <input type="radio" id="five" name="rate" className="select" value="☆☆☆☆☆"/>
                <label htmlFor="five" className="label-for-check">☆☆☆☆☆</label>
                <br/>
                <p><label htmlFor="comments">Any additional comments for your recommendation?</label></p>
                <textarea id="comments"> </textarea>

                <br/>
                <p><label htmlFor="genre">What genre is the book you are recommending?</label></p>
                <select name="genre" id="genre">
                    <option value="Mystery">Mystery</option>
                    <option value="Non-fiction">Non-Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Fiction">Fiction</option>
                </select>
                <br/><br/>
                <button type="submit" value="Submit">Submit Recommendation</button>
            </form>
        </div>
    )
}

export default Form;

