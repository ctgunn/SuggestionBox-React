const initialState: any[] = [];

function nextSuggestionId(suggestions: any[]) {
    const maxId = suggestions.reduce((maxId, suggestion) => Math.max(suggestion.id, maxId), -1);
    return maxId + 1;
}

const suggestionsReducer: any = (state: any[] = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'suggestions/suggestionAdded': {
            // Can return just the new suggestions array - no extra object around it
            return [
                ...state,
                {
                    id: nextSuggestionId(state),
                    text: action.payload,
                    completed: false,
                },
            ]
        }
        // case 'suggestions/suggestionToggled': {
        //     return state.map((suggestion) => {
        //         if (suggestion.id !== action.payload) {
        //             return suggestion;
        //         }
        //
        //         return {
        //             ...suggestion,
        //             completed: !suggestion.completed,
        //         };
        //     });
        // }
        // case 'suggestions/colorSelected': {
        //     const { color, suggestionId } = action.payload
        //     return state.map((suggestion) => {
        //         if (suggestion.id !== suggestionId) {
        //             return suggestion;
        //         }
        //
        //         return {
        //             ...suggestion,
        //             color,
        //         };
        //     });
        // }
        case 'suggestions/suggestionDeleted': {
            return state.filter((suggestion) => suggestion.id !== action.payload);
        }
        case 'suggestions/allRead': {
            return state.map((suggestion) => {
                return { ...suggestion, completed: true };
            });
        }
        case 'suggestions/hasReadCleared': {
            return state.filter((suggestion) => !suggestion.completed);
        }
        default:
            return state;
    }
};


export default suggestionsReducer;