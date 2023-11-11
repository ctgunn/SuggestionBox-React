import React from "react";
import Suggestion from './Suggestion';
import {Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import {render} from "react-dom";

const SuggestionBox = () => {
    render(
        <div>
            {/*<span>You have no new suggestions.</span>*/}
            <Suggestion
                number={1}
                title={"Random"}
                name={"Anonymous"}
                date={"July 12th, 2022"}/>
            <Suggestion
                number={2}
                title={"Superman is so cool!"}
                name={"Clark Kent"}
                date={"June 8th, 2022"}/>
            <Suggestion
                number={3}
                title={"Batman is better than Superman!"}
                name={"Bruce Wayne"}
                date={"May 4th, 2022"}/>
        </div>
    );
};

export default SuggestionBox;