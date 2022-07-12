import React from "react";
import Suggestion from './Suggestion';

export default class Box extends React.Component {
    render() {
        return (
            <div>
                {/*<span>You have no new suggestions.</span>*/}
                <Suggestion number={1}/>
                <Suggestion number={2}/>
                <Suggestion number={3}/>
            </div>
        )
    }
}