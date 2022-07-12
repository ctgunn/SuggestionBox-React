import React from "react";

export default class Suggestion extends React.Component {
    render() {
        return (
            <div>
                <span>This is suggestion number {this.props.number}</span>
            </div>
        )
    }
}