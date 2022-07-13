import React from "react";

export default class Suggestion extends React.Component {
    render() {
        return (
            <div>
                <apan id={"suggestor"}>{this.props.name}</apan>
                <span id={"suggestionDate"}>{this.props.date}</span>
                <div>{this.props.title}</div>
                <div id={"suggestionMessage"}>This is suggestion number {this.props.number}</div>
            </div>
        )
    }
}