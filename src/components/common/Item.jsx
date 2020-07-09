import React from "react";

const Item = ({title, name}) => {
    return <div>
        <b>{title}: </b><a>{name}</a>
    </div>
}

export default Item