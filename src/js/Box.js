import React from "react";
import Suggestion from './Suggestion';
import { Collapse, Popover, Toast, Tooltip, Alert, Modal, Dropdown, Button} from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class Box extends React.Component {
    render() {
        return (
            <div>
                {/*<span>You have no new suggestions.</span>*/}
                <Suggestion
                    number={1}
                    title={"Random"}
                    name={"Anonymous"}
                    date={"July 12th, 2022"}/>
                <Suggestion
                    number={2}
                    title={"Superman is so cool!"}
                    name={"Clark Kent"}
                    date={"June 8th, 2022"}/>
                <Suggestion
                    number={3}
                    title={"Batman is better than Superman!"}
                    name={"Bruce Wayne"}
                    date={"May 4th, 2022"}/>
            </div>
        )
    }
}