import React from "react";
import Suggestion from './Suggestion';
import 'bootstrap/dist/css/bootstrap.css';

const suggestions: {number: number, title: string, message: string, name: string, date: string}[] = [
    {
        number: 1,
        title: 'Random',
        message: 'This is just a random suggestion for you to think about.',
        name: 'Anonymous',
        date: 'July 12th, 2023'
    },
    {
        number: 2,
        title: 'Superman is cool!',
        message: 'Superman is the greatest superhero of all time. He is way better than Batman!',
        name: 'Clark Kent',
        date: 'July 12th, 2023'
    },
    {
        number: 3,
        title: 'Batman is better!',
        message: 'I just wanted to take a moment to point out how much better Batman is than Superman. ' +
            'That Superman guy is quite the hack if you ask me!',
        name: 'Anonymous',
        date: 'July 12th, 2023'
    }
];

let emptySuggestions: React.JSX.Element = <div>
    <span>You have no new suggestions.</span>
</div>;

let suggestionsList: React.JSX.Element = <div>
    {suggestions.map(suggestion => {
        return <Suggestion
            name={suggestion.name}
            date={suggestion.date}
            title={suggestion.title}
            message={suggestion.message}
            number={suggestion.number}/>;
    })}
</div>;

const SuggestionBox = (): React.JSX.Element => {
    if(suggestions.length > 0) {
        return suggestionsList;
    } else {
        return emptySuggestions;
    }
};

export default SuggestionBox;