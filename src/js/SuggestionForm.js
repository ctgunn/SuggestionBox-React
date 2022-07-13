import React from "react";
import { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown, Button} from 'react-bootstrap/Button';

export default class Suggestion extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type={"text"} placeholder={"Enter a title..."}/>
                    <input type={"textarea"} placeholder={"Enter your suggestion here..."}/>
                </form>
            </div>
        )
    }
}