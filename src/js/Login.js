import React from "react";
import Suggestion from './Suggestion';

export default class Box extends React.Component {
    render() {
        return (
            <div id={"login-container"}>
                <div id={"username"}>
                    <label>Username</label>
                    <input type={"text"} placeholder={"Username"} title={"Enter your username."} />
                </div>
                <div id={"password"}>
                    <label>Password</label>
                    <input type={"password"} placeholder={"Password"} title={"Enter your password."} />
                </div>
            </div>
        )
    }
}