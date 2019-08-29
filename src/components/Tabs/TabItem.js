import React  from "react";
import Tab from '@material-ui/core/Tab';

export default (props) => {
    return (
        <Tab onClick={() => props.handleChange(props.el.page)} label={props.el.label} />
    )
}