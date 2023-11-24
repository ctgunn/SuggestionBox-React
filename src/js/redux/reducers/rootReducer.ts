import { combineReducers } from 'redux'
import suggestionsReducer from "./suggestionsReducer";
// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
    // Define a top-level state field named `suggestions`, handled by `suggestionFormReducer`
    suggestions: suggestionsReducer
    // todos: todosReducer,
    // filters: filtersReducer,
});

export default rootReducer;