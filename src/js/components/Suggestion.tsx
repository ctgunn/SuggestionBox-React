import React, {MouseEventHandler} from "react";

type SuggestionProps = {
    name: string,
    date: string,
    title: string,
    message: string,
    number: number
};

const Suggestion = ({name, date, title, message, number}: SuggestionProps) => {
    return (
        <div>
            <span id={"suggestor"}>{name}</span>
            <span id={"suggestionDate"}>{date}</span>
            <div id={"suggestionTitle"}>{title}</div>
            <div id={"suggestionMessage"}>{message}</div>
            <div id={"suggestionNumber"}>This is suggestion number {number}</div>
        </div>
    )
};

export default Suggestion;