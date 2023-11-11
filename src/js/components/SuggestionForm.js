import React from "react";
import {Button} from 'react-bootstrap/Button';
import {render} from "react-dom";

const SuggestionForm = () => {
    render (
        <div>
            <form>
                <input type={"text"} placeholder={"Enter a title..."}/>
                <input type={"textarea"} placeholder={"Enter your suggestion here..."}/>
            </form>
        </div>
    );
};

export default SuggestionForm;