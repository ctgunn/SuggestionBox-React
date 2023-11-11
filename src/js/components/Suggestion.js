import React from "react";
import {render} from "react-dom";

const Suggestion = () => {
    render (
        <div>
            <apan id={"suggestor"}>{this.props.name}</apan>
            <span id={"suggestionDate"}>{this.props.date}</span>
            <div>{this.props.title}</div>
            <div id={"suggestionMessage"}>This is suggestion number {this.props.number}</div>
        </div>
    )
};

export default Suggestion;