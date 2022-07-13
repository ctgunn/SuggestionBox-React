import React from "react";
import Suggestion from './Suggestion';
import { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown, Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class Box extends React.Component {
    render() {
        return (
            <div>
                {/*<span>You have no new suggestions.</span>*/}
                <Suggestion number={1}/>
                <Suggestion number={2}/>
                <Suggestion number={3}/>
            </div>
        )
    }
}