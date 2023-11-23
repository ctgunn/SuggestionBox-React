import React from "react";

const SuggestionForm = () => {
    return (
        <div>
            <form>
                <input type={"text"} placeholder={"Enter a title..."}/>
                <input type={"textarea"} placeholder={"Enter your suggestion here..."}/>
            </form>
        </div>
    );
};

export default SuggestionForm;